// KEEP THE CODE WHICH YOU WANT TO RUN AND COMMENT THE REST ONES

// code 1 - Promisses is another way for asynchronicity
/*
OUTPUT:
End of first tick
Delay has ended
*/
var delay = seconds =>
  new Promise((resolves, rejects) => {
    setTimeout(resolves, seconds * 1000);
  });

delay(1).then(() => {
  console.log("Delay has ended");
});

console.log("End of first tick");

// code 2 - Passing data to resolves
/*
OUTPUT:
End of first tick
The long delay has ended
Hello World 42
*/
var delay = seconds =>
  new Promise((resolves, rejects) => {
    setTimeout(() => {
      resolves("The long delay has ended");
    }, seconds * 1000);
  });

// delay(1).then(message => {
//   console.log(message);
// });

delay(1)
  .then(console.log)
  .then(() => 42)
  .then(number => {
    console.log(`Hello World ${number}`);
  });

console.log("End of first tick");
