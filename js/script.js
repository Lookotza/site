const myItemsPack = require('../items-again.json');

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

