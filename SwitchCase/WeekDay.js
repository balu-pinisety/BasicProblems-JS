console.log("Program for displaying a week by Random Number");
let number = Math.floor(Math.random() *10) % 7 + 1;
console.log("Random Day Number: "+number);
switch (number) {
    case 1:
        console.log("Day 1 in week is Sunday");
        break;
    case 2:
        console.log("Day 2 in week is Monday");
        break;
    case 3:
        console.log("Day 3 in week is Tuesday");
        break;
    case 4:
        console.log("Day 4 in week is Wednesday");
        break;
    case 5:
        console.log("Day 5 in week is Thursday");
        break;
    case 6:
        console.log("Day 6 in week is Friday");
        break;
    default:
        console.log("Day 7 in week is Saturday");
}