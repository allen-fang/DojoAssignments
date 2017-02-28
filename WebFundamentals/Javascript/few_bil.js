var reward = 0.01;

for(var i = 0; i < 30; i++) {
	reward *= 2;
}

console.log(reward);


var reward_2 = 0.01;
var count = 0;

while (true) {
	if (reward_2 > 10000) {
		break;
	}

	reward_2 *= 2;
	count++;
}

console.log(count);

var reward_3 = 0.01;
var count_2 = 0;

while (true) {
	if (reward_3 > 1000000000) {
		break;
	}

	reward_3 *= 2;
	count_2++;
}

console.log(count_2);
console.log("done");

var reward_4 = 0.01;
var count_3 = 0;

while (true) {
	if (reward_4 > Infinity) {
		break;
	}

	reward_4 *= 2;
	count_3++;
}

console.log(count_3);



