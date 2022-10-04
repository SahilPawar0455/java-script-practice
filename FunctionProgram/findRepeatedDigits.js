let reverseNumberArray = new Array();
let min = 10; max = 100;

for (let i = min; i < max; i++) {
    checkReverses(i);
}

function checkReverses(number){
    let reverseNumber = number.toString().split("").reverse().join("");
    if (number == reverseNumber) {
        reverseNumberArray.push(number);
    }
}

for (let index = 0; index < reverseNumberArray.length; index++) {
    console.log(reverseNumberArray[index]);
}