
/*
  Q1.  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// let isargam = function(str1, str2)
// {
//     let sorted1 = str1.split('').sort().join();
//     let  sorted2 = str2.split('').sort().join();

//     return (sorted1 === sorted2);
// }




// console.log(isargam('hello','olleh'));
// console.log(isargam('hello','olled'));



//Q2.
 /*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is  category-wise and unique has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// function calculateTotalSpentByCategory(transactions) {
//   const cateogoryfood = {};
   
//   transactions.forEach(transactions => {
//     const {cateogory , price} = transactions;
//     if(categorytotal[cateogory])
//     {
//       categorytotal[cateogory] +=price;
//     }else{
//       categorytotal[cateogory] = price;
//     }
//   });
//   const result = Object.keys(categorytotal).map(cateogory=>{
//     return
//     {
//       cateogory: cateogory 
//       totalSpent: categorytotal[cateogory]
//     };
//   });
//   return result;
// }

// const transactions = [
//   { id: 1, price: 10, category: 'Food', itemName: 'Pizza' },
//   { id: 2, price: 20, category: 'Food', itemName: 'Burger' },
//   { id: 3, price: 15, category: 'Entertainment', itemName: 'Movie Ticket' }
// ];


// Q3. 
/*
  Implement a class `Calculator` having below methods
  - initialise a result variable in the constructor and keep updating it after every arithmetic operation
  - add: takes a number and adds it to the result
  - subtract: takes a number and subtracts it from the result
  - multiply: takes a number and multiply it to the result
  - divide: takes a number and divide it to the result
  - clear: makes the `result` variable to 0
  - getResult: returns the value of `result` variable
  - calculate: takes a string expression which can take multi-arithmetic operations and give its result
    example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
    Points to Note: 
      1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
      2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

Once you've implemented the logic, test your code by running
*/

class Calculator {
constructor() {
  this.result = 0;
}

add(number) {
  this.result += number;
}

subtract(number) {
  this.result -= number;
}

multiply(number) {
  this.result *= number;
}

divide(number) {
  if (number === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  this.result /= number;
}

clear() {
  this.result = 0;
}

getResult() {
  return this.result;
}

calculate(expression) {
  // Remove all spaces from the expression
  const sanitizedExpression = expression.replace(/\s+/g, '');

  // Validate that the expression only contains valid characters
  if (!/^[\d+\-*/().]*$/.test(sanitizedExpression)) {
    throw new Error("Invalid characters in the expression.");
  }

  // Evaluate the sanitized expression
  try {
    // Use the Function constructor to evaluate the expression
    // This approach evaluates the expression in the context of a new function
    this.result = new Function('return ' + sanitizedExpression)();
    return this.result;
  } catch (error) {
    throw new Error("Error evaluating the expression.");
  }
}
}

// Example usage:
const calc = new Calculator();

// Basic arithmetic operations
calc.add(5);
console.log(calc.getResult()); // 5

calc.subtract(2);
console.log(calc.getResult()); // 3

calc.multiply(4);
console.log(calc.getResult()); // 12

calc.divide(3);
console.log(calc.getResult()); // 4

// Complex calculation
try {
console.log(calc.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7")); // Should return 24
} catch (error) {
console.error(error.message);
}

// Handling invalid input
try {
console.log(calc.calculate("5 + abc")); // Should throw an error
} catch (error) {
console.error(error.message);
}

// Clear result
calc.clear();
console.log(calc.getResult()); // 0


