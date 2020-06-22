// KEEP THE CODE WHICH YOU WANT TO RUN AND COMMENT THE REST ONES

// // code 1 - without promisify

// var delay = (seconds, callback) => {
//   if (seconds > 3) {
//     callback(new Error(`${seconds} is too long!`));
//   } else {
//     setTimeout(() => {
//       callback(null, "The long delay has ended");
//     }, seconds);
//   }
// };

// delay(2, (error, message) => {
//   if (error) console.log(error.message);
//   else console.log(message);
// });

// // code 2 - with promisify
// var { promisify } = require("util");

// var delay = (seconds, callback) => {
//   if (seconds > 3) {
//     callback(new Error(`${seconds} is too long!`));
//   } else {
//     setTimeout(() => {
//       callback(null, "The long delay has ended");
//     }, seconds);
//   }
// };

// var promiseDelay = promisify(delay);
// promiseDelay(5)
//   .then(console.log)
//   .catch(error => console.log(`Error: ${error.message}`));

// code 3 - using promisify for fs module

var fs = require("fs");
var { promisify } = require("util");

var writeFile = promisify(fs.writeFile);

writeFile("promisifyFunction.txt", "The sample file")
  .then(() => console.log("File Successfully created!"))
  .catch(error => console.log("Error created!"));
