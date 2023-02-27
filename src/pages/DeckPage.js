import React from 'react';
import {Component} from 'react'
import json_deck from '../js/decklist';

export default class SimulatorPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        deck: []
      };
    }

    GetImg(array) {
      let index = 0;
      let url_arr = []

      const intervalID = setInterval(() => {
        if (index < array.length) {
          console.log(array[index]);
          
          var requestOptions = {method: 'GET',redirect: 'follow'};
          
          fetch("https://api.scryfall.com/cards/named?exact="+array[index].name+"", requestOptions)
          .then(response => response.json())
          .then(result => {url_arr.push(result.image_uris.png)})
          .catch(error => console.log('error', error));
          index++;
        } 
        else {
          clearInterval(intervalID); 
          this.MergeArr(array,url_arr )
        }
      }, 500);
    }

    MergeArr(array, url_array){
      url_array.forEach(function (value, i) {
        array[i].url = value
      });

      console.log(array)
      this.setState({deck : array}) 
    
      // console.log(this.state.deck);
    }

    componentDidMount(){
      this.GetImg(json_deck)
    }
    
    render() {
      return(
        <p>this.state.deck</p>
      ) ;
    }
  }