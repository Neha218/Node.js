// KEEP THE CODE WHICH YOU WANT TO RUN AND COMMENT THE REST ONES

// Code 1 - Synchronous
/*
OUTPUT:
XXXXX XXXXX
End
*/
function hideString(str, done) {
  done(str.replace(/[a-zA-Z]/g, "X"));
}

hideString("Hello World", hidden => {
  console.log(hidden);
});
console.log("End");

/***************************************************************************/
// code 2 - Asynchronous
/*
OUTPUT:
End
XXXXX XXXXX
*/
// nextTick tells node js to invoke the process that we sent to nextTick in the next loop
function hideString(str, done) {
  process.nextTick(() => {
    done(str.replace(/[a-zA-Z]/g, "X"));
  });
}

hideString("Hello World", hidden => {
  console.log(hidden);
});

console.log("End");

// Code 3 - Asynchronous with setTimeout
/*
OUTPUT:
Starting delays
End of first tick
Two seconds
Three seconds
*/
function delay(seconds, callback) {
  setTimeout(callback, seconds * 1000);
}

console.log("Starting delays");
delay(2, () => {
  console.log("Two seconds");
  delay(1, () => {
    console.log("Three seconds");
  });
});
console.log("End of first tick");
