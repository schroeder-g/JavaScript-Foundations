// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively. Create another value called name and give it the value of your own name.
*/
const principal = 200000;
const interest = 0.05;
const years = 30;
const name = 'Alex';




// 🏡 Task 1.5: Simple Math

const monthlyInterestRate = interest/12;
const periods = years*12;


// 🏡 Task 2: Harder Math

// M = P [ I ( 1 + I )^N ] / [ ( 1 + I )^N – 1 ]


const n1 = Math.pow((1+monthlyInterestRate),periods);
const numerator = n1 * monthlyInterestRate;
const denominator = n1-1;
const monthlyRate = numerator/denominator;
const monthlyPayment = principal * monthlyRate;
console.log("your monthly rate is " + monthlyPayment.toFixed(2));


// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"*/

function mortgageCalculator (){
    const principal = 200000;
    const interest = 0.05;
    const years = 30;
    const monthlyInterestRate = interest/12;
    const periods = years*12;
    const name = 'Alex';
    const monthlyPayment=principal* (monthlyInterestRate * Math.pow((1+monthlyInterestRate),periods)/(Math.pow((1+monthlyInterestRate),periods)-1));
    let statement = name + ", your monthly rate is $" + monthlyPayment.toFixed(2) + ".";
    console.log(statement);
}

mortgageCalculator();

// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.*/

function mortgageCalculator (P,I,N){
    const monthlyInterestRate = I/12;
    const periods = N*12;
    const monthlyPayment= P * (monthlyInterestRate * Math.pow((1+monthlyInterestRate),periods)/(Math.pow((1+monthlyInterestRate),periods)-1));
    console.log("Your monthly rate is $" + monthlyPayment.toFixed(2) + ".")
}

// 🏡 Task 5: Conditionals

function mortgageCalculator (P,I,N,C){
    if (C > 740 && C <=800){
        I=I*.95;
    }else if (C < 660 && C >= 0){
        I=I*1.05;
    }else if (C > 660 && C < 740){
        I=I;
    }
    else{
        return console.log("That's an interesting credit score.")
    }
    const monthlyInterestRate = I/12;
    const periods = N*12;
    const monthlyPayment= P * (monthlyInterestRate * Math.pow((1+monthlyInterestRate),periods)/(Math.pow((1+monthlyInterestRate),periods)-1));
    console.log("Your monthly rate is $" + monthlyPayment.toFixed(2) + ".")
}



// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the same as mortgageCalculator, except it should console.log the monthly payment for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.*/

function variableInterestRate (name, p, int,n){
    int= int - .02;
    const periods = n*12;
    for(let i=0; i<10; i++){
        let monthlyInterestRate = int/12;
        const monthlyPayment= p * (monthlyInterestRate * Math.pow((1+monthlyInterestRate),periods)/(Math.pow((1+monthlyInterestRate),periods)-1));
        console.log(name + ", with an interest rate of " + int*100 + "%, your monthly rate is $" + monthlyPayment.toFixed(2) + ".");
        int = int + .005;
    }
}



// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */
function housingCalculator (p,i,n,prop,hoi,hoa){
    const monthlyInterestRate = i/12;
    const periods = n*12;
    const monthlyPayment= p * (monthlyInterestRate * Math.pow((1+monthlyInterestRate),periods)/(Math.pow((1+monthlyInterestRate),periods)-1));
    const totalSpend = monthlyPayment + prop + hoi + hoa;
    console.log("With mortgage payments of $" + monthlyPayment.toFixed(2) + ", your total monthly housing spend would be $" + totalSpend.toFixed(2) + ".")
}

/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */


/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */
function mortgageCalculator (){
    let p = prompt("Enter the principal value of your loan: ")
    let i = prompt("Enter the interest rate of your loan: ")
    let n = prompt("Enter the period of loan repayment, in years: ")
    const monthlyInterestRate = i/12;
    const periods = n*12;
    const monthlyPayment= p * (monthlyInterestRate * Math.pow((1+monthlyInterestRate),periods)/(Math.pow((1+monthlyInterestRate),periods)-1));
    console.log("Your monthly rate is $" + monthlyPayment.toFixed(2) + ".")
}

/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */
