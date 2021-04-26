const ITEMS_PACK_URL = 'https://gist.githubusercontent.com/ctrl-raul/3b5669e4246bc2d7dc669d484db89062/raw/';
const itemsPack = await getJson(ITEMS_PACK_URL);

async function getJson () {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (err) {
        // For now we just re-throw the error, delete
        // the next code line if you wanna do something
        // else in case it fails to load the JSON
        throw err;
    }
}
let items = myItemsPack.items;



function openBox() {
    

    document.getElementById('item').style.display = 'block';

    const fs = require('fs');
    
    const itemList = fs.readdirSync(items);

    document.getElementById('gamer').innerHTML = itemList.length;




}

function getTiers(tier) {
  let str = 'CRELMD'
  return tier = str.substring(
    str.lastIndexOf(tier[0]), 
    str.lastIndexOf(tier[1]) + 1
  );
}


function RandomTier() {
  RTier = Math.ceil(Math.random() * 1000)
  if(RTier <= 650){
    return RTier = 'E';
  }else{
    return RTier = 'L';
  }
}

function getItem(RTier){
  var item = items.find(item => item.id === 1);
  if(RTier === 'E'){
    do{
      RItem = Math.ceil(Math.random() * 210);
  
      item = items.find(item => item.id === RItem);
                
      var tier = getTiers(item.transform_range.split('-'));
      
      console.log(tier)
      console.log(item.name)

    }while(tier === "LMD");
    return(RTier + '-' + item.name.split(' ').join(''))
  }else{
    RItem = Math.ceil(Math.random() * 210);
  
    item = items.find(item => item.id === RItem);
              
    var tier = getTiers(item.transform_range.split('-'));
    
    console.log(tier)
    console.log(item.name)
    return(RTier + '-' + item.name.split(' ').join(''))
  }
  
}

function box(){

    
var RTier = RandomTier()
console.log(RTier)
const image = getItem(RTier)

console.log(image)
message.channel.send({files: ['./items2/' + image + '.png']})


    }

