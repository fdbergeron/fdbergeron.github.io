
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  let x = '#';
  let count = 1;
  while (count < num + 1) {
    console.log(x);
    x += '#';
    count++;
    
  }
  
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(num1, num2) {
  for (let number = num1; number < num2 + 1; number++) {
    if (number % 5 === 0 && number % 3 === 0) {
      console.log('fizzbuzz');
      
    } else if (number % 3 === 0) {
      console.log('fizz');
      
    } else if (number % 5 === 0) {
      console.log('buzz');
      
    } else {
      console.log(number);
      
    }
    
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
  let resultString = '';
  if (number % 2 === 0){
		//even board
		let oddUnit = ' #';
		let evenUnit = '# ';
		let count = 0;
		let oddFinalString = '';
		let evenFinalString = '';
		while (count < number / 2) {
			oddFinalString += oddUnit;
			evenFinalString += evenUnit;
			count++;
		}
		count = 0;
		while (count < number / 2) {
			resultString += oddFinalString + '\n';
			resultString += evenFinalString + '\n';
			count++;
		}
		} else {
			//odd board
			let oddUnit = ' #';
			let evenUnit = '# ';
			let count = 0;
			let oddFinalString = '';
			let evenFinalString = '';
			while (count < number / 2 - 1) {
			  oddFinalString += oddUnit;
			  evenFinalString += evenUnit;
			  count++;
			  
			}
			count = 0;
			while (count < number / 2 - 1) {
			  resultString += oddFinalString + ' \n';
			  resultString += evenFinalString + '#\n';
			  count++;
			  
			}
			resultString += oddFinalString + ' \n';
			
		}
	console.log(resultString);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}

