function printFancyArray(arr, symbol = "->", reverse = false) {
	if (reverse) {
		for(var i = arr.length-1; i >=0; i--) {
			console.log(i + " " + symbol + " " + arr[i]);
		}
	} else {
		for(var i = 0; i < arr.length; i++) {
			console.log(i + " " + symbol + " " + arr[i]);
		}
	}
}


var ex = ["James", "Jill", "Jane", "Jack"];

printFancyArray(ex);
printFancyArray(ex, '=>');
printFancyArray(ex, '::', true);