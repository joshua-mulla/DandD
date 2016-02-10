var fs = require('fs');

/*var str = ['array\n','of\n','strings\n'];
//writeFile('path/to/file', string, callbackFunction);
fs.writeFile('text.txt', str, function(err){
	if(err){
		console.log('ERROR');
	}

	console.log('file was written');
});*/

var array =[1,2,3,4,5];
array.splice(0,1);
console.log(array);

/*var str = 'this is a string of characters';

//.replace('what you want to replace', 'what you want to replace
//	it with') // will exit after first match
//.replace(/replace this/g, replacer) // will continue after matching
str = str.replace(/ /g,'');
console.log(str);*/