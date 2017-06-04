var fs = require('fs');
var data = 'Hi my name is colin and today I am going to print this line of text into output.txt so anyone reading this knows colin is a pro dev';
//create writable stream
var writeableStream = fs.createWriteStream(process.argv[2]);
//make sure what you write to the file is readable
writeableStream.write(data, 'UTF8');
//mark end of line
writeableStream.end();
//handle stream events --> finish and error
writeableStream.on('finish', function(){
  console.log('The write is complete');
});
writeableStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");

