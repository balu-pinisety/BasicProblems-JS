console.log("Program to simulate a coin flip");
let random = Math.floor(Math.random()*10) % 2;
if(random == 1) {
    console.log("Its Heads!")
}else {
    console.log("Its Tails!")
}