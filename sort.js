function Sorter(){};

exports.rmDuplicates = function(array){
	for(var i=0;i<array.length;++i){
		for(var ix=0;ix<array.length;++ix){
			if(array[i]===array[ix]&& i!=ix){
				array.splice(ix,1);
			}
		}
	}
};

exports.rmDuplicatesS = function(array){
	var length = array.length;
	for(var i=0;i<length;++i){
		for(var ix=0;ix<length;++ix){
			if(array[i]===array[ix] &&
				i!=ix){
				array.splice(ix,1);
			}
		}
	}
}
function alphebetize(array){
	
}
exports.smallToBig = function(array){
	var smallest;
	var sorted = [];
	var deleteIX;
	var found = false;
	var length = array.length;
		for(var ix=0;ix<length;++ix){
			smallest = array[0];
			found=false;
			deleteIX = 0;
			for(var i=0;i<array.length;++i){
				if(array[i]<smallest){
					smallest = array[i];
					deleteIX = i;
					found=true;
				}
			}
			//console.log(smallest);
			array.splice(deleteIX,1);
			sorted.push(smallest);
			

			
	}
	return sorted;
};

