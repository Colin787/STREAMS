var fs = require('fs');
//var greet = fs.readFileSync(__dirname + process.argv[2], 'utf8');
//console.log(greet);
var greet2 = fs.readFile(__dirname + process.argv[2], 'utf8',
  function(err, data){
  if(err){
    throw err;
  } else {
    console.log(data)
  }

});