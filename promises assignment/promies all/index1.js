// ** promises in javascript 

// promises nothing but it an just syntatical sugar of callbackfunction and async task 


 /*
     Q1. 
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
  
  
    function wait(n) {
        // Return a new promise
        return new Promise((resolve, reject) => {
          // Call setTimeout to resolve the promise after n seconds
          setTimeout(() => {
            resolve("Promise resolved after " + n + " seconds");
          }, n * 1000); // n * 1000 because setTimeout works in milliseconds
        });
      }
      
      // Call wait function and pass 2 seconds as argument
      wait(2).then((message) => {
        console.log(message); // Outputs after 2 seconds: "Promise resolved after 2 seconds"
      });

      */


      