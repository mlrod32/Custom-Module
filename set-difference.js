function setDifference(num1, num2){
	 var num3 = [];
	  var num4 = [];
	  num3 = num3.concat(num1);
	  num4 = num4.concat(num2);

	
	if(num3.length > num4.length){
		for(var i = 0; i < num3.length; i++){
			for (var j = 0; j < num4.length; j++) {
				if(num3[i] == num4[j]){
					num3.splice(i, 1);
					num4.splice(j, 1);
				}
			}
		}
	}else if(num4.length > num3.length){
		for(var i = 0; i < num4.length; i++){
			for (var j = 0; j < num3.length; j++) {
				if(num4[i] == num3[j]){
					num4.splice(i, 1);
					num3.splice(i, 1);
				}
			}
		}
	}
	var num = num3.concat(num4);
	return num;
}


module.exports = setDifference;