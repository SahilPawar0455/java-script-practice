let startPoint = 1;
let endPoint = 10;
while(startPoint < endPoint){
 let result = Math.pow(2,startPoint);
 if(result <=256){
    console.log("2 ^ "+startPoint+" = "+ result);
 }
 startPoint++;
}