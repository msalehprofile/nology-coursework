// 1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.
const positiveNumber = (chosenNumber) => {
    if(chosenNumber>0) {
        console.log("True");
    } else if (chosenNumber<0) {
        console.log("False");
    } else {
        console.log("This is zero")
    }
}

positiveNumber(-2);
positiveNumber(6);
positiveNumber(0);

// 2. Write a function that takes a number of days and converts it into an age.
const amountOfDays = (days) => {
    calculateAge = Math.round(days / 365);
    console.log(calculateAge);
}

amountOfDays(1000);
amountOfDays(4827);
amountOfDays(19347783);

// 3. Write a function that takes three numbers and returns the largest of the three numbers.
const getLargestNumber = (number1,number2,number3) => {
    if(number1>number2&&number1>number3) {
        console.log("The biggest number is "+number1);
        } else if (number2>number1&&number2>number3) {
        console.log("The biggest number is "+number2);
        } else {
        console.log("The biggest number is "+number3);
    }
}

getLargestNumber(4,100,3);
getLargestNumber(150,100,30);
getLargestNumber(400,90,3333);

// 4. Write a function that takes an array of names and returns the last name from the array of names.
let getLastName = (names) => {
    let theLastName = names[names.length-1];
    console.log(theLastName)
}

getLastName(['phil',"chris"]);
getLastName(['mary',"paul",'john']);
getLastName(['autumn',"sally",'charlie','nour']);



// 5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.