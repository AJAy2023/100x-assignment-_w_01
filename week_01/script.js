
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

function calculateTotalSpentByCategory(transactions) {
  const cateogoryfood = {};
   
  transactions.forEach(transactions => {
    const {cateogory , price} = transactions;
    if(categorytotal[cateogory])
    {
      categorytotal[cateogory] +=price;
    }else{
      categorytotal[cateogory] = price;
    }
  });
  const result = Object.keys(categorytotal).map(cateogory=>{
    return
    {
      cateogory: cateogory 
      totalSpent: categorytotal[cateogory]
    };
  });
  return result;
}

const transactions = [
  { id: 1, price: 10, category: 'Food', itemName: 'Pizza' },
  { id: 2, price: 20, category: 'Food', itemName: 'Burger' },
  { id: 3, price: 15, category: 'Entertainment', itemName: 'Movie Ticket' }
];
