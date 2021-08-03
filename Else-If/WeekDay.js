console.log("Program for displaying a week by Random Number");
let number = Math.floor(Math.random() *10) % 7 + 1;
console.log("Random Day Number: "+number);
if (number==1) {
    console.log("Day 1 in week is Sunday");
} else if(number==2) {
    console.log("Day 2 in week is Monday");
} else if(number==3) {
    console.log("Day 3 in week is Tuesday");
} else if(number==4) {
    console.log("Day 4 in week is Wednesday");
} else if(number==5) {
    console.log("Day 5 in week is Thursday");
} else if(number==6) {
    console.log("Day 6 in week is Friday");
} else {
    console.log("Day 7 in week is Saturday");
}