// KEEP THE CODE WHICH YOU WANT TO RUN AND COMMENT THE REST ONES

// // code 1 - With throw error
// var delay = seconds =>
//   new Promise((resolves, rejects) => {
//     throw new Error("aaaa");
//     setTimeout(() => {
//       resolves("The long delay has ended");
//     }, seconds * 1000);
//   });

// delay(1)
//   .then(console.log)
//   .then(() => 42)
//   .then(number => {
//     console.log(`Hello World ${number}`);
//   })
//   .catch(error => console.log(`Error: ${error.message}`));

// console.log("End of first tick");

// code 2 - With reject method
var delay = seconds =>
  new Promise((resolves, rejects) => {
    if (seconds > 3) {
      rejects(new Error(`${seconds} is too long!`));
    }
    setTimeout(() => {
      resolves("The long delay has ended");
    }, seconds * 1000);
  });

delay(4)
  .then(console.log)
  .then(() => 42)
  .then(number => {
    console.log(`Hello World ${number}`);
  })
  .catch(error => console.log(`Error: ${error.message}`));

console.log("End of first tick");
