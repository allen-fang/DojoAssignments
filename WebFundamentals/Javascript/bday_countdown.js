var daysUntilMyBirthday = 60;

while (daysUntilMyBirthday > 0) {
	if (daysUntilMyBirthday > 30) {
		console.log(daysUntilMyBirthday, "days until my birthday. Such a long time...");
	} else if (daysUntilMyBirthday > 5) {
		console.log(daysUntilMyBirthday, "days until my birthday. Almost there!");
	} else {
		console.log(daysUntilMyBirthday, "DAYS UNTIL MY BIRTHDAY!!!");
	}
	daysUntilMyBirthday--;
}

console.log("Happy Bithday!");