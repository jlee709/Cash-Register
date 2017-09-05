console.log('cash register linked');
// logic of the cash register

// main points 

//vars

// function bttons
var display = document.getElementById('newEntry');
var clearButton = document.getElementsByClassName('fkeyClr');
var balanceButton = document.getElementsByClassName('fkeyBal');
var depositButton = document.getElementsByClassName('fkeyDep');
var withdrawButton = document.getElementsByClassName('fkeyWith');

// Keys



// 1. ( display ) is the primary ui that prints all results
	

// 2. [clear] will clear the display

 clearButton.onClick = function(){
	clearButton.style.display = "none";
	display = 0;
	return display;
};


// 3. [get balance] will display the current balance

balanceButton.onClick = function(){};

// 4. [deposit cash] will add the amount currently in the ( display ) to the cash register, then clear the display
depositButton.onClick = function(){};

// 5. [withdraw cash] will remove the amount currently in the ( display ) to the cash register, then clears the display

withdrawButton.onClick = function(){};


// have acsess to data in the html files via the dom

// use the DOM to get acsess to each key 

//apply the calculator function from cal file to the cash register logic


// $$ Check to see that onClick value is taken and can be passed into
// $$ the input field for the operations !!! make cash register work
// $$ with basic integers first then refactor for floats
// * parse ints, join method and for each loops and arrays is a way to use * 