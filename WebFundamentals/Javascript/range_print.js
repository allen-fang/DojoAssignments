function printRange(start=0, end, skip=1) {
	if (end == undefined) {
		end = start;
		start = 0;
	}

	for(var i = start; i < end; i += skip) {
		console.log(i);
	}
}


printRange(4);

console.log("24" == 24);
