let numberArray = new Array();
let generatedNumber = 10;
function randomNumber() {
    return Math.floor(Math.random() * 899 + 100);
}

for (let index = 0; index <= generatedNumber; index++) {
    numberArray.push(randomNumber());
}
// using bubble sort method
for(let i = 0;i<numberArray.length;i++){
    for (let j = 1; j < (numberArray.length - i); j++){
         if (numberArray[j-1]>numberArray[j]) {
            let temp = numberArray[j-1];
            numberArray[j-1] = numberArray[j];  
            numberArray[j] = temp;
         }
    }
}

console.log("Array is = ")
for (let index = 0; index < numberArray.length; index++) {
  console.log(numberArray[index]);
}
console.log("Second smallest number in Array is = "+numberArray[1]);
console.log("Second Largest number in Array is = "+numberArray[(numberArray.length-2)]);