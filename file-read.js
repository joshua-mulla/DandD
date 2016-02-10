/*To perform a filesystem operation you are going to need the fs module from
the Node core library. To load this kind of module, or any other "global"
module, use the following incantation:*/

var fs = require('fs');
/*All synchronous (or blocking) filesystem methods in the fs module end with
'Sync'. To read a file, you'll need to use
fs.readFileSync('/path/to/file'). This method will return a Buffer object
containing the complete contents of the file.

Documentation on the fs module can be found by pointing your browser here:
file://c:\Users\Josh\AppData\Roaming\npm\node_modules\learnyounode\node_ap
idoc\fs.html*/
var buffer = fs.readFileSync(process.argv[2]);

var str = buffer.toString();

/*.split("where you want the split(s) in the string") 
	-will return an array, each split string being an element in the array*/
//str = str.split("\n");
console.log(str);
