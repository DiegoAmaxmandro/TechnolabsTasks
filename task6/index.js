//this line is a contant that recieves the forecast of today
const kelvin = 350;
//this line the let clsius is getting its value that will always be equals to kelvin - 273
let celsius = kelvin - 273;
//on this line we get the value of fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//on this line we round the result alocated in the fahrenheit variable
Math.floor(fahrenheit);
//in this line we are consverting kelvin to newton and round after
let newton = celsius * (33/100);
Math.floor(newton);


console.log("The temperature is " + celsius +" degrees celsius.")
console.log("The temperature is " + fahrenheit +" degrees Fahrenheit.")
console.log("The temperature is " + newton +" degrees newton.")
