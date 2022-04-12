process.stdout.write('hello from spinner1.js... \rheyyy\n');

// delayTime starts from 100, then increment 200, stops at 1300
// how to make the spinner circles with lines (/\|-) with only one line, how to combine them ?
// 1. list them in an array, then iterate them each with loops ?

const lines = ["|", "/", "-", "\\", "\|", "\/", "\\"];

let delayTime = 100;
// starting the initial 100ms

// iterating through the loop
for (const line of lines) {
//   console.log(line);
  setTimeout(() => {
  process.stdout.write(`\r${line}   `);
}, delayTime)
delayTime += 200;
};




// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\|   '); 
// }, 900);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\/   '); 
// }, 1100);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 1300);

