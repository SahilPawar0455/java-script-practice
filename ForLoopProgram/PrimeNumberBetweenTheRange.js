let startnumber = 12;
let endNumber = 50;
for(let i = startnumber;i<=endNumber;i++){
    let counts = 0;
    for (let j = 2; j < i;j++){
        if (i%j == 0) {
            counts++;
        }
    }
    if (counts == 0) {
        console.log(i +" this is prime number");
    }
}