console.log('cash register linked');
			
			//$$checks
// $$ Check to see that onClick value is taken and can be passed into
// $$ the input field for the operations !!! make cash register work
// $$ with basic integers first then refactor for floats
// * parse ints, join method and for each loops and arrays is a way to use * 



// logic of the cash register

// function buttons global vars

var display = document.getElementById('newEntry');
var clearButton = document.getElementsByClassName('fkeyClr');
var balanceButton = document.getElementsByClassName('fkeyBal');
var depositButton = document.getElementsByClassName('fkeyDep');
var withdrawButton = document.getElementsByClassName('fkeyWith');


// how load should work:
/*
	100 * 20 = 2000

	1, 0, 0, *, 2, 0, =
	1, 0, 0 > load(100)
	* 
	2, 0
	=
	2,0,0,0

	- Initially empty buffer
	- Any number press is added to the buffer
	- as soon as you press +-/* calculator.load()
	- store operator
	- clear buffer
	- continue typing numbers in new buffer
	- when you press =, trigger appropriate calculation with new buffer value
	- clear buffer
	- clear operator
*/

var calculator = new calculatorModule();

// Keys linking logic
var keys = document.querySelectorAll('.keys');

// buffer stores logic for load function in calculator

var buffer = '';
var op = '';

// makes the display the buffer
var updateDisplay = function(){
	display.value = buffer;
};
// adds to buffer
var addToBuffer = function(val){
	buffer += val;
	updateDisplay();
};

// changing between button choices of num and math operator
var buttonClick = function(e) {
	switch(this.getAttribute('data-type')){
		case 'number':
			addToBuffer(this.getAttribute('data-value'));
		break;
		case 'op':
			op = this.getAttribute('data-value');
			calculator.load(parseInt(buffer));
			buffer = '';
			updateDisplay();
		break;
	}
};

// make clickable
keys.forEach(function(key){
	key.addEventListener('click', buttonClick);
});


// 1. ( display ) is the primary ui that prints all results
	

// 2. [clear] will clear the display


// 3. [get balance] will display the current balance

balanceButton.onClick = function(){};

// 4. [deposit cash] will add the amount currently in the ( display ) to the cash register, then clear the display
depositButton.onClick = function(){};

// 5. [withdraw cash] will remove the amount currently in the ( display ) to the cash register, then clears the display

withdrawButton.onClick = function(){};







