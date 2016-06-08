var obj = {"title":"Acid Splash\r",
			"contents":[
			"Conjuration cantrip\r",
			"Casting Time: 1 action\r",
			"Range: 60 feet\r",
			"Components: V, S\r",
			"Duration: Instantaneous\r",
			"You hurl a bubble of acid. Choose one creature within\r",
			 "range, or choose two creatures within range that are\r",
			 "within 5 feet of each other. A target must succeed on a\r",
			 "Dexterity saving throw or take 1d6 acid damage.\r",
			 "This spell’s damage increases by 1d6 when you reach\r",
			 "5th level (2d6), 11th level (3d6), and 17th level (4d6).\r"]};

function parseObj(obj, newObject){
		newObject.Type = obj.contents[0];
		newObject.CastingTime = obj.contents[1];
		newObject.Range = obj.contents[2];
		newObject.Components = obj.contents[3];
		newObject.Duration = obj.contents[4];
		for(var i=5;i<obj.contents.length;++i){
			newObject.Contents.push(obj.contents[i]);
		}
	}
var newObject= {
	Type: null,
	CastingTime: null,
	Range: null,
	Components: null,
	Duration: null,
	Contents: []
};
parseObj(obj,newObject);
console.log(newObject);