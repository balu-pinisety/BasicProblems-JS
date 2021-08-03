console.log("Program for Unit Conversion");

/*Conversion of inches to feet*/
const FEET_IN_INCH = 12;
let user_inch = 42;
let inch_in_feet = user_inch/FEET_IN_INCH;
console.log(user_inch+" inches = "+inch_in_feet+" feet");

/*Conversion of feet to meters*/
const FEET_IN_METER = 0.3048;
let length_in_feet = 60;
let breadth_in_feet = 40;
let area_in_meters = (length_in_feet*FEET_IN_METER) * (breadth_in_feet*FEET_IN_METER);
console.log("Area of Rectangular plot of "+length_in_feet+
" feet X "+breadth_in_feet+" feet in square meters: "+area_in_meters);

/*Conversion of square feet to acres*/
const ACRE_IN_SQ_FEET=43560;
let plots_number=25;
let area_in_acres=(length_in_feet*breadth_in_feet*plots_number)/ACRE_IN_SQ_FEET;
console.log("Area of "+plots_number+" plots in acres: "+area_in_acres);