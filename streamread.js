var fs = require('fs');
var data = '';
var pro = process.argv[2];

//create a readable srream... im going to use process.arvg
var readableStream = fs.createReadStream(pro);
//Make it readable by setting the encoding to utf-8
readableStream.setEncoding('UTF8');
//Handle stream events --> data, end and err
readableStream.on('data', function(chunk){
  data += chunk;
});
readableStream.on('end',function(){
   console.log(data);
});

readableStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");