const ITEMS_PACK_URL = 'https://gist.githubusercontent.com/ctrl-raul/3b5669e4246bc2d7dc669d484db89062/raw/';
let itemsPack = null;
let items = [];

fetch(ITEMS_PACK_URL)
    .then(response => response.json())
    .then(json => {
        itemsPack = json;
        // foobar gonna use this block more in future doodoodaa
        items = itemsPack.items;
    })
    .catch(err => {
        // For now we just re-throw the error, delete
        // the next code line if you wanna do something
        // else in case it fails to load the JSON
        throw err;
    });



const openBoxBtn = document.getElementById('open-box-btn');
openBoxBtn.onclick = () => openBox();




function openBox() {

const img = document.createElement('img');

img.src = box();

const previousImg = document.getElementById('item-img');
if (previousImg !== null) {
  previousImg.remove();
}

document.body.appendChild(img);

img.id = 'item-img'
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

function box () {
  const RTier = RandomTier();
  const image = getItem(RTier);
  console.log('calling box()', { RTier, image });
  return `https://raw.githubusercontent.com/Lookotza/site/master/items2/${image}.png`;
}

