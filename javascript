//The forecast today is 293 Kelvin 
const kelvin = 293;
//Celsius is 273 degrees 
const celsius = kelvin-273;
//fahrenheit to celcius formula
let fahrenheit = celsius * (9/5) + 32;
//Javascript built-in Math object to round down number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
