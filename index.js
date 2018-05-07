
function move_blocks() {
  var blocks = document.getElementsByClassName('block');
    
  var positions = [], top, left;
  for(var i = 0; i < blocks.length; i++){
    top  = blocks[i].offsetTop;
    left = blocks[i].offsetLeft;
    positions.push([top,left]);
  }
  
  var array = html_collection_to_array(blocks);
  shuffle(array);
  switch_blocks(positions, array)
}

function switch_blocks(positions=[], array=[]){
  var old_top_pos, new_top_pos, old_left_pos, new_left_pos;
  var dx, dy;
  
  for( var i = 0; i < array.length; i++){
    old_top_pos = array[i].offsetTop;
    new_top_pos = positions[i][0];
    old_left_pos = array[i].offsetLeft;
    new_left_pos = positions[i][1];
    
    dx = new_left_pos - old_left_pos;
    dy = new_top_pos - old_top_pos;
    array[i].style.transform = "translate("+dx+"px,"+dy+"px)";
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;    

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function html_collection_to_array(html_collection){
  return [].slice.call(html_collection);
}














