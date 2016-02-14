var str = '’';
obj = {
	title: 'string'
}
str = str.replace('’','something else');
newStr = obj.title.replace('string','something different');
console.log(newStr);