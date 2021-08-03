console.log("Program to write a random single digit number into word");
let number = Math.floor(Math.random() *10);
let random =1;
for (i=0;i<number;i++){
    random *= 10;
}
console.log("Random Number: "+random);
if (number==0) {
    console.log(random+" is a Unit's Value");
} else if(number==1) {
    console.log(random+" is a Ten's Value");
} else if(number==2) {
    console.log(random+" is a Hundred's Value");
} else if(number==3) {
    console.log(random+" is a Thousand's Value");
} else if(number==4) {
    console.log(random+" is a Ten Thousand's Value");
} else if(number==5) {
    console.log(random+" is a Lakh's Value");
} else if(number==6) {
    console.log(random+" is a Ten Lakh's Value");
} else if(number==7) {
    console.log(random+" is a Crore's Value");
} else if(number==8) {
    console.log(random+" is a Ten Crore's Value");
} else {
    console.log(random+" is a Hundred Crore's Value");
}