var HOUR = 12;
var MINUTE = 50;
var PERIOD = "AM";

var x;
var y;
var hour_printed = HOUR;
var period_printed = PERIOD;

if (PERIOD == "AM") {
	x = "in the morning";
} else if (PERIOD == "PM") {
	x = "in the evening";
}

if (MINUTE > 30) {
	y = "almost";
	hour_printed += 1;
} else if (MINUTE < 30) {
	y = "just after";
}

if (HOUR == 12 && MINUTE > 30) {
	hour_printed = 1;
}

if (HOUR == 11 && MINUTE > 30 && PERIOD == 'AM') {
	x = 'in the evening';
}

if (HOUR == 11 && MINUTE > 30 && PERIOD == 'PM') {
	x = 'in the morning';
}


console.log("It's", y, hour_printed, x);