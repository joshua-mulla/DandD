var fs = require('fs');
var sorter = require('./sort.js');
var jsonfile = require('jsonfile');

var buffer = fs.readFileSync('spell-names.txt');
var spellNames= buffer.toString();
var indexes=[];
var array = new Array();

buffer = fs.readFileSync('spells.txt');
var spells = buffer.toString();
var description = [];

function display(element,index,array){
	console.log(element);
};

function removeSpaces(array){
	for(var i=0;i<array.length;++i){
		array[i] = array[i].replace(/ /g,'');
	}
}

function copy(array){
	var copy = [];
	for(var i=0;i<array.length;++i){
		copy.push(array[i]);
	}
	return copy;
}

function Description(title){
	this.title = title;
	this.contents = [];
}


spells = spells.split('\n');
spellNames = spellNames.split('\n');
sorter.rmDuplicatesS(spellNames);
var spellNames = sorter.smallToBig(spellNames);


var spellsF = copy(spells);
var spellNamesF = copy(spellNames);

removeSpaces(spellsF);
removeSpaces(spellNamesF);

var j = 0;
var spellsLength = spellsF.length;
var namesLength = spellNamesF.length;


for(var i=0;i<namesLength;++i){
	for(var ix=0;ix<spellsLength;++ix){
		if(spellNamesF[i]===spellsF[ix]){
			indexes.push(ix);
			spells[ix]= spellNames[i];
			spellsF[ix] =null;
		}
		
	}
}

indexes = sorter.smallToBig(indexes);

ix = 0;
for(var i=0;i<spells.length;++i){
	
	if(indexes[ix]===i){
		array.push(new Description(spells[i]));
		++ix;
	}
	else{
		array[ix-1].contents.push(spells[i]);	
	}
}

function search(array,val){
	for(var i=0;i<array.length;++i){
		console.log(val===array[i].title);
		if(val===array[i].title){
			return array[i];
		}
	}
}
/*for(var i=0;i<array.length;++i){
	JSON.stringify(array[i]);
}
console.log(array);*/
function replace(array){
	for(var i=0;i<array.length;++i){
		for(var ix=0;ix<array[i].contents.length;++ix){
			array[i].contents[ix]= array[i].contents[ix].replace('’','\'');
		}
	}
}
var filtered = replace(array);
jsonfile.writeFileSync('another.js', array);

