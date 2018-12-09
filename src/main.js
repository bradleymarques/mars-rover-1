// Include prompt module.
var prompt = require('prompt');
var {executeCommands} = require('./rover');

var prompt_attributes = [
  {
      name: 'zonesize',
      hidden: false,
      validator: /^[\d\s]+$/,
      warning: 'Zone Size is not valid, it can only contain numbers seperated by one space'
  },
  {
      name: 'orientation',
      hidden: false,
      validator: /^[A-Z0-9 _]+$/,
      warning: 'Orientation is not valid, it can only contain numbers, a space and a letter'
  },
  {
      name: 'movementcommands',
      hidden: false,
      validator: /^[MRL]+$/,
      warning: 'Commands are not valid, '
  }
];

// Start the prompt to read user input.
prompt.start();

// Prompt and get user input then display those data in console.
prompt.get(prompt_attributes, function (err, result) {
    if (err) {
        console.log(err);
        return 1;
    }else {
        console.log('Command-line received data:');

        // Get user input from result object.
        var zonesize = result.zonesize;
        var orientation = result.orientation;
        var movementcommands = result.movementcommands;

        var inputBoardSize = result.zonesize.split(" ");
        var arrTemp = result.orientation.split(" ");
        var inputStartPosition = arrTemp[0].split("");
        var inputStartOrientation = arrTemp[1];
        var inputCommands = result.movementcommands.split("");

        executeCommands(inputBoardSize, inputStartPosition, inputStartOrientation, inputCommands);
        
    }
});
