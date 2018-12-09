var boardSize;
var commands;
var compass = ["N", "E", "S", "W"];
var compassCurrentIndex = 0;
var currentDirection;

var posHor  = 0;
var posVert = 0;

executeCommands = (inputBoardSize, inputStartPosition, inputStartOrientation, inputCommands) => {
  var resultStr = "\nResult : \n";
  boardSize = inputBoardSize;
  posHor = parseInt(inputStartPosition[0]);
  posVert = parseInt(inputStartPosition[1]);
  commands = inputCommands;

  currentDirection = inputStartOrientation;
  compassCurrentIndex = compass.indexOf(currentDirection);

  for(var i = 0; i < commands.length; i++){
    var command = commands[i];

    if(command === "M" & currentDirection === "N"){
        posVert = moveRoverUp();
    }else if (command === "M" & currentDirection === "S"){
        posVert = moveRoverDown();
    }else if (command === "M" & currentDirection === "W"){
        posHor = moveRoverLeft();
    }else if (command === "M" & currentDirection === "E"){
        posHor = moveRoverRight();
    }else if(command === "L"){
      currentDirection = rotateRoverLeft();
    }else if(command === "R"){
      currentDirection = rotateRoverRight();
    }

  }
  console.log(posHor, posVert, compass[compassCurrentIndex]);

}

function rotateRoverLeft(){
  compassCurrentIndex = compassCurrentIndex - 1;
  if(compassCurrentIndex < 0) compassCurrentIndex = compass.length-1;

  return compass[compassCurrentIndex];

}

function rotateRoverRight(){
  compassCurrentIndex = compassCurrentIndex + 1;
  if(compassCurrentIndex >= compass.length) compassCurrentIndex = 0;

  return compass[compassCurrentIndex];

}

function moveRoverUp(){
  var num = posVert + 1;
  return num;
}

function moveRoverDown(){
  var num = posVert - 1;
  return num;
}

function moveRoverLeft(){
  var num = posHor - 1;
  return num;
}

function moveRoverRight(){
  var num = posHor + 1;
  return num;
}

exports.executeCommands = executeCommands
exports.currentDirection = currentDirection
exports.compassCurrentIndex = compassCurrentIndex
exports.compass = compass

exports.posHor = posHor
exports.posVert = posVert

exports.rotateRoverLeft = rotateRoverLeft
exports.rotateRoverRight = rotateRoverRight
exports.moveRoverUp = moveRoverUp
exports.moveRoverDown = moveRoverDown
exports.moveRoverLeft = moveRoverLeft
exports.moveRoverRight = moveRoverRight
