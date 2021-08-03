console.log("Program for Unit Conversion");
console.log("1.Feet to Inch\n2.Inch to Feet\n3.Feet to Meter\n4.Meter to Inch");
let number = Math.floor(Math.random() *10) % 4 + 1;
console.log("Random Number: "+number);
switch (number) {
    case 1:
        console.log("Converting Feet to Inch");
        let random1 = Math.floor(Math.random() *100);
        console.log("Value of feet: "+random1);
        console.log(random1+" feet = "+random1*12+" inches");
        break;
    case 2:
        console.log("Converting Inch to Feet");
        let random2 = Math.floor(Math.random() *100);
        console.log("Value of inches: "+random2);
        console.log(random2+" inches = "+random2/12+" feet");
        break;
    case 3:
        console.log("Converting Feet to meter");
        const FEET_IN_METER = 0.3048;
        let random3 = Math.floor(Math.random() *100);
        console.log("Value of feet: "+random3);
        console.log(random3+" feet = "+random3*FEET_IN_METER+" meters");
        break;
    default:
        console.log("Converting Meter to Feet");
        const METER_IN_FEET = 3.2808;
        let random4 = Math.floor(Math.random() *100);
        console.log("Value of feet: "+random4);
        console.log(random4+" meter = "+random4*METER_IN_FEET+" feet");
}