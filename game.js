/*
this the rock, paper scissor game 
*/

const objects = ['📄', '💎', '✂'];

//this function returns a random object for the computer
function computerPlay () {
  return objects[Math.random() * 2];
}

