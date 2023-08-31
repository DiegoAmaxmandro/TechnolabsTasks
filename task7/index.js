//this line represents me actual age
let myAge = 31;
//this line represents the first two dog's years 
let earlyYears = 2;
earlyYears *= 10.5;
//this line we have subtracted the the first two dog's years from my age
let lateYears = myAge - 2;
//this line we multiply the late years bt 4
lateYears *= 4;

console.log(earlyYears, lateYears)

//Addind both resilto of age together
let myAgeInDogYears = earlyYears + lateYears;
//declaring a string my name
let myName = "Diego".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
