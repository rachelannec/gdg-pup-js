// scripts.js
console.log("For Loop Output");
// Example Using a for loop to print numbers 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(`Number: ${i}`);
}

// Using a while loop to print a list of hobbies
let hobbies = [
  "Reading", // Example hobby
  "Writing", // Example hobby
  "Coding",
  "Sitting",
  "Eating",
  "Standing",
   // Add more hobbies
];

console.log("\nWhile Loop Output");
let index = 0;
while (index < hobbies.length) {
  // Log each hobby and see if it works in the console
  console.log(`Hobby ${index+1}: ${hobbies[index]}`);
  index++;
}