let numberArray = new Array();
let generatedNumber = 10;
function randomNumber() {
    return Math.floor(Math.random() * 899 + 100);
}

for (let index = 0; index <= generatedNumber; index++) {
    numberArray.push(randomNumber());
}
numberArray.sort();
console.log("Array is = ")
for (let index = 0; index < numberArray.length; index++) {
  console.log(numberArray[index]);
}
console.log("Second smallest number in Array is = "+numberArray[1]);
console.log("Second Largest number in Array is = "+numberArray[(numberArray.length-2)]);