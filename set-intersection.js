function setIntersection(num1,num2){
	this.num = [];
	this.num1 = num1;
	this.num2 = num2;
	for ( var i =  0; i < num1.length; i++) {
		 for (var j = 0; j < num2.length; j++) {
		 	if(num1[j] == num2[i]){
		 		this.num.push(num1[j]);
		 	}
		 }
	//console.log(num);
	}
	return this.num;
}

module.exports = setIntersection;