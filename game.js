var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var num = 0


function quest1 (){
	var question1 = prompt("Was it easy to get to Code Fellows today?");

	if (question1.toUpperCase() === 'YES' || question1.toUpperCase() === 'Y' ) {
		one.innerHTML = 'Lucky you';
		num++;
	} else {
		one.innerHTML = 'Sucks to be you';
	}
}


function quest2 (){
	var question2 = prompt("Where are you communting from?");

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
	var question3 = prompt("Did you make it to class on time?");

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





