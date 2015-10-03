var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var picOne = document.getElementById('picOne');
var picTwo = document.getElementById('picTwo');
var picThree = document.getElementById('picThree');
var results = document.getElementById('results');
var num = 0
var questions = ['Was it easy to get to Code Fellows today?',
									'Where are you communting from?',
									'Did you make it to class on time?'];

function quest1 (){
	var question1 = prompt(questions[0]);

	if (question1.toUpperCase() === 'YES' || question1.toUpperCase() === 'Y' ) {
		one.innerHTML = 'Lucky you';
		num++;
		one.className = ('correct');
		picOne.innerHTML = '<img src="img/cairotaxi2.jpg" width = "200" />';
	} else {
		one.innerHTML = 'Sucks to be you';
		one.className = ('wrong');
	}
	//with results here it updates after this answer -ReH
	results.innerHTML = 'You got ' + num + ' out of 3 right';
}
function quest2 (){
	var question2 = prompt(questions[1]);

	if (question2.toUpperCase() === 'TACOMA' || question2.toUpperCase() === 'OLYMPIA') {
		two.innerHTML = 'That is it';
		num++;
		two.className = ('correct');
		picTwo.innerHTML = '<img src="img/african-lion-kruger-national-park-south-africa_160.jpg" width = "200" />';
	} else if (question2.toUpperCase() === 'EVERETT'){
		two.innerHTML = 'Wrong Direction';
		two.className = ('wrong');
	} else {
		two.className = ("wrong");
		two.innerHTML = 'Nope';

	}
	//with results here it updates after this answer -ReH
	results.innerHTML = 'You got ' + num + ' out of 3 right';
}
function quest3 (){
	var question3 = prompt(questions[2]);

	if (question3.toUpperCase() === 'YES' || question3.toUpperCase() === 'Y') {
		three.innerHTML = 'Good Job';
		num++;
		three.className = ('correct');
		picThree.innerHTML = '<img src="img/art-teacher_160.jpg" width = "200" />';

	} else {
		three.innerHTML = 'Better luck tomorrow';
		three.className = ('wrong');
	}
	//with results here it updates after this answer -ReH
	results.innerHTML = 'You got ' + num + ' out of 3 right';
}
quest1();
window.setTimeout(quest2, 1000);//sugested in slack by Sam.
window.setTimeout(quest3, 1000);

// moved results to the question functions so they update after every answer -ReH
// results.innerHTML = 'You got ' + num + ' out of 3 right';






