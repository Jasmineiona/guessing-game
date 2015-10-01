var question1 = prompt("Was it easy to get to Code Fellows today?");

if (question1.toUpperCase() === 'YES') {
	alert('Lucky you');
} else {
	alert('Sucks to be you');
}

var question2 = prompt("Where are you communting from?");

if (question2.toUpperCase() === 'Tacoma') {
	alert('That is it');
} else {
	alert('Nope');
}

var question3 = prompt("Did you make it to class on time?");

if (question3.toUpperCase() === 'YES') {
	alert('Good Job');
} else {
	alert('Better luck tomorrow');
}

console.log('Exactly what the user entered: ' + question1);
console.log('What I am testing in my "if" condition: ' + question1.toUpperCase(
	));

console.log('Exactly what the user entered: ' + question2);
console.log('What I am testing in my "if" condition: ' + question2.toUpperCase(
	));

console.log('Exactly what the user entered: ' + question3);
console.log('What I am testing in my "if" condition: ' + question3.toUpperCase(
	));


// here are some changes...


