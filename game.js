var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var num = 0
var questions = ['Was it easy to get to Code Fellows today?',
									'Where are you communting from?',
									'Did you make it to class on time?'];

function quest1 (){
	var question1 = prompt(questions[0]);

	if (question1.toUpperCase() === 'YES' || question1.toUpperCase() === 'Y' ) {
		one.innerHTML = 'Lucky you';
		num++;
	} else {
		one.innerHTML = 'Sucks to be you';
	}
}


function quest2 (){
	var question2 = prompt(questions[1]);

	if (question2.toUpperCase() === 'TACOMA' || question2.toUpperCase() === 'OLYMPIA') {
		two.innerHTML = 'That is it';
		num++;
	} else if (question2.toUpperCase() === 'EVERETT'){
		two.innerHTML = 'Wrong Direction';
	} else {
		two.innerHTML = 'Nope'
	}
}

function quest3 (){
	var question3 = prompt(questions[2]);

	if (question3.toUpperCase() === 'YES' || question3.toUpperCase() === 'Y') {
		three.innerHTML = 'Good Job';
		num++;
	} else {
		three.innerHTML = 'Better luck tomorrow';
	}
}

quest1();
quest2();
quest3();

alert('RESULTS: You got ' + num + ' out of 3 right');





