const deck = '10 Mountain\n10 Swamp\n4 Bloodtithe Harvester\n3 Gixian Infiltrator\n3 Morbid Opportunist\n3 Sokenzan Smelter\n4 Voldaren Epicure\n2 Dragonspark Reactor\n3 Experimental Synthesizer\n2 Mishra\'s Research Desk\n4 Oni-Cult Anvil\n2 Cut Down\n2 Go for the Throat\n4 Voltage Surge\n4 Bloodfell Caves';

//const decklist = '4 Bloodtithe Harvester\n3 Gixian Infiltrator';

function ConvertDeckList(decklist){
    const decklist_arr = decklist.split('\n');
    const cardsObject = [];

    for (let i = 0; i < decklist_arr.length; i++) {
      const card = decklist_arr[i];
      const count = card.substring(0, card.indexOf(' '));
      const name = card.substring(card.indexOf(' ') + 1);
      cardsObject.push({ count, name });
    }

    return cardsObject;
}

var json_deck = ConvertDeckList(deck)

export default json_deck