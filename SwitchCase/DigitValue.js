console.log("Program to write a random single digit number into word");
let number = Math.floor(Math.random() *10);
let random =1;
for (i=0;i<number;i++){
    random *= 10;
}
console.log("Random Number: "+random);
switch (number) {
    case 0:
        console.log(random+" is a Unit's Value");
        break;
    case 1:
        console.log(random+" is a Ten's Value");
        break;
    case 2:
        console.log(random+" is a Hundred's Value");
        break;
    case 3:
        console.log(random+" is a Thousand's Value");
        break;    
    case 4:
        console.log(random+" is a Ten Thousand's Value");
        break;
    case 5:
        console.log(random+" is a Lakh's Value");
        break;
    case 6:
        console.log(random+" is a Ten Lakh's Value");
        break;
    case 7:
        console.log(random+" is a Crore's Value");
        break;
    case 8:
        console.log(random+" is a Ten Crore's Value");
        break;
    default:
        console.log(random+" is a Hundred Crore's Value");
        break;
}