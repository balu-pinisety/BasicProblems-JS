console.log("Program to find Sum & Avg. of Five Random Numbers");
let upper_limit = 999;
let lower_limit = 100;
let range = upper_limit-lower_limit;
let sum=0;
for(i=0; i<5; i++){
    let number = Math.floor(Math.random() * 100) % range + lower_limit;
    console.log("Random Number '"+(i+1)+"' : "+number);
    sum += number;
}
console.log("Sum of 5 Random NUmbers : "+sum);
console.log("Average of 5 Random NUmbers : "+sum/5);