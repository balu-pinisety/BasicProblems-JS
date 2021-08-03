console.log("Program to find Max & Min in resluts of Arithmetic operations");
let upper_limit = 99;
let lower_limit = 10;
let range = upper_limit-lower_limit;
let a = Math.floor(Math.random() * 1000) % range + lower_limit;
let b = Math.floor(Math.random() * 1000) % range + lower_limit;
let c = Math.floor(Math.random() * 1000) % range + lower_limit;
console.log("values of a = "+a+"; b = "+b+"; c = "+c);
let result1 = a + b * c;
let max=min=result1;
let result2 = a % b + c;
if (result2>max){
    max=result2;
}else if(result2<min){
    min=result2;
}
let result3 = c + a / b;
if (result3>max){
    max=result3;
}else if(result3<min){
    min=result3;
}
let result4 = a * b + c;
if (result4>max){
    max=result4;
}else if(result4<min){
    min=result4;
}
console.log("Result of a + b * c :"+result1+
"\nResult of a % b + c :"+result2+
"\nResult of c + a / b :"+result3+
"\nResult of a * b + c :"+result4);
console.log("Maximum of All results : "+max);
console.log("Minimum of All results : "+min);