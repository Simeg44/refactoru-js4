// Original Code:


/*var victims = prompt("Number of disaster victims you wish to enter:");
var names = [];
var phoneNum = [];
var street = [];

for (i = 0; i < victims; i++) {
	names.push(prompt("Enter victim's name:"));
	phoneNum.push(prompt("Enter their phone number:"));
	street.push(prompt("Enter street:"));
}

var volunteers = prompt("Number of volunteers:");
var volNames = [];
var volNums = [];
var volStreet = [];

for (i = 0; i < volunteers; i++) {
	volNames.push(prompt("Enter volunteer's name:"));
	volNums.push(prompt("Enter their phone number:"));
	volStreet.push(prompt("Enter street"));
}

printOutVic = "Number of victims: " + victims;


for (i=0; i < victims; i++) {
	printOutVic = printOutVic + ", Name: " + names[i] + ", Number: " + phoneNum[i] + ", Street: " + street[i];
}

printOutVol = "Number of volunteers: "+ volunteers;

for (i=0; i < volunteers; i++) {
	printOutVol = printOutVol + ", Name: " + volNames[i] + ", Number: " + volNums[i] + ", Street: " + volStreet[i];
}


alert(printOutVic + "\n" + printOutVol);*/


var victims = {
	total: 0,
	names: [],
	number: [],
	street: []
};

do {
	victims.names.push(prompt("Enter victims name: "));
	victims.number.push(prompt("Enter phone number: "));
	victims.street.push(prompt("Enter street: "));

	victims.total++;

} while (confirm("Would you like to enter another victim?"));

var volunteers = {
	total: 0,
	names: [],
	number: [],
	street: []
};

do {
	volunteers.names.push(prompt("Enter volunteers name: "));
	volunteers.number.push(prompt("Enter phone number: "));
	volunteers.street.push(prompt("Enter street: "));

	volunteers.total++;

} while (confirm("Would you like to enter another volunteer?"));

printOutVic = "Number of victims: " + victims.total;


for (i=0; i < victims.total; i++) {
	printOutVic = printOutVic + ", Name: " + victims.names[i] + ", Number: " + victims.number[i] + ", Street: " + victims.street[i];
}


printOutVol = "Number of volunteers: " + volunteers.total;


for (i=0; i < volunteers.total; i++) {
	printOutVol = printOutVol + ", Name: " + volunteers.names[i] + ", Number: " + volunteers.number[i] + ", Street: " + volunteers.street[i];
}

alert(printOutVic + "\n" + printOutVol);

var need = prompt("Enter the name of a person in need: ");

var position = victims.names.indexOf(need);

if (position === -1) {
	alert("That victim is not in the database.");
}
else {
	var available = "Available volunteers: ";

	for (i=0; i < volunteers.total; i++) {
		if (volunteers.street[i] === victims.street[position]) {
			available = available + volunteers.names[i];
		}
	}
	alert(available);
}


