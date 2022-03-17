//STEP 1
//let number;

//function halfNumber() {
   // number = number / 2;
    //document.write(`Half is ${number}.`);
//}

//number = parseFloat(prompt('Please enter a number'));
//halfNumber();

//STEP 2
//let number;

//function squareNumber() {
    //number = number * number;
   //document.write(`The result of squaring the number ///is ${number}.`);
//}

//number = parseFloat(prompt('Please enter a number'));
//squareNumber();

//STEP 3
//let result, firstNumber, secondNumber;

//function percentOf() {
    //result = (firstNumber / secondNumber) * 100;
    //document.write(`${firstNumber} is ${result}% of ${secondNumber}`);
//}

//firstNumber = parseFloat(prompt('Please enter a first number'));
//secondNumber = parseFloat(prompt('Please enter a second number'));
//percentOf();

//STEP 4

//let result, firstNumber, secondNumber;

//function findModulus() {
    //result = firstNumber % secondNumber;
    //document.write(`${result} is the modulus of ${firstNumber} and ${secondNumber}`)
//}

//firstNumber = parseFloat(prompt('Please enter a first number'));
//secondNumber = parseFloat(prompt('Please enter a second number'));

//findModulus();

//STEP 5

let num1, num2, num3;

 function calculate(numbers) {
     let total = Number(numbers);
     for (let i = 1; i < arguments.length; i++) {
         total += Number(arguments[i]);
     }
     document.write(`The sum of numbers ${num1}, ${num2} and ${num3} is ${total}.`);
 }
 mun1 = parseFloat(prompt('Please enter a first number'));
num2 = parseFloat(prompt('Please enter a second number'));
num3 = parseFloat(prompt('Please enter third number'));

calculate(num1, num2, num3);

