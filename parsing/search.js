exports.find =function(val,array){
	var val = val+'\r';
	for(var i=0;i<array.length;++i){
		if(array[i].title.toLowerCase()===val.toLowerCase()){
			return array[i];
		}
	}
	return 'unable to find spell';
}