// _________CHAPTER 9-10_________//


// ____QUESTION NO 1____//

var greet = prompt("Your City")
if (greet === "karachi") {
    alert("Welcome to the City of Lights")
}
else (
    alert("Welcome User")
)
//____QUESTION NO 2____//

var gender = prompt("Your gender")
if (gender === "male") {
    alert("Good Morning, Sir")
}
else {
    alert("Good Morning, Mam")
}

//____QUESTION NO 3____///

var signal = prompt("Color of Traffic Signal")
if (signal == "red") {
    alert("Must Stop")
}
else if (signal == "yellow") {
    alert("Ready to Move")
}
else if (signal == "green") {
    alert("Move Now")
}
else {
    alert("bhai agar traffic light kharab hai to ruka q hai")
}

//____QUESTION NO 4____//

var fuel = prompt("Remaining fuel left  ")
if (fuel <= 0.25) {
    alert("Please Refill Your Fuel")
}
else {
    alert("bhot Petrol hai Ameerzade apke pass")
}

// ____QUESTION NO 5____//

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (++b === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (++c === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" > "cat") {
    alert("car is smaller than cat");
}

// ____QUESTION NO 6____//

document.write("<h1>Mark Sheet</h1>")
var marks;
var total;
var percent;
total = prompt("Enter Total Marks")
marks = prompt("Enter Obtained Marks")
document.write("Total Marks : " + total)
document.write("<br>")
document.write("Marks Obtained : " + marks)
document.write("<br>")
percent = (marks * 100) / total;
document.write("Percentage : " + percent + "%")
document.write("<br>")
if (percent >= 80) {
    document.write("Grade : A-One")
    document.write("<br>")
    document.write("Remarks : Excellent")
}
else if (percent >= 70) {
    document.write("Grade : A")
    document.write("<br>")
    document.write("Remarks : Good")
}
else if (percent >= 60) {
    document.write("Grade : B")
    document.write("<br>")
    document.write("Remarks : You Need To Improve")
}
else {
    document.write("Grade : Fail")
    document.write("<br>")
    document.write("Remarks : Sorry")
}

// ___QUESTION NO 7___//

var guess;
guess = prompt("Enter a Number \nRanging from 1 to 10")
if (guess == 8) {
    alert("Bingo! You Guessed the Right Number")
}
else if (guess == 7) {
    alert("Close Enough to the Correct Answer")
}
else {
    alert("Not Even close")
}

// ___QUESTION NO 8___//
var three;
three = prompt("Enter Any Number", "3")
if (three % 3 == 0) {
    alert("Number is Divisible by 3")
}
else {
    alert("Number is not divisible by 3")
}

// ___QUESTION NO 9___//
var even;

even = prompt("Enter Any Number")
if (even % 2 == 0) {
    alert("Given Number is Even")
}
else {
    alert("Given Number is Odd")
}

// ___QUESTION NO 10___//
var temp;
temp = prompt("Enter Today's Temperature")
if (temp > 40) {
    alert("It's too hot outside")
}
else if (temp > 30) {
    alert("The Weather Today is Normal")
}
else if (temp > 20) {
    alert("Today's Weather is Cool")
}
else if (temp > 10) {
    alert("OMG! Today's Weather is so cool")
}
else if (temp > 0) {
    alert("freezing outside")
}
else {
    alert("Value Enter krni hoti hai")
}

//___QUESTION NO 11___//
document.write("<h1>CALCULATOR</h1>")

var num1 = prompt("Enter Number 1")
var num2 = prompt("Enter Number 2")
var add = -(-num1 - num2);
var subtract = num1 - num2;
var product = num1 * num2;
var divide = num1 / num2;
var mod = num1 % num2;
document.write("<br>")
document.write("Addition of " + num1 + " and " + num2 + " is : " + add)
document.write("<br>")
document.write("Subtraction of " + num1 + " and " + num2 + " is : " + subtract)
document.write("<br>")
document.write("Product of " + num1 + " and " + num2 + " is : " + product)
document.write("<br>")
document.write("Division of  " + num1 + " and " + num2 + " is : " + divide)
document.write("<br>")
document.write("Mod of  " + num1 + " and " + num2 + " is : " + mod)


// _______CHAPTER 12-13_______//

var char = prompt("Enter a Keyword")
if (char >= 65 && char <= 90) {
    alert("UPPERCASE")
}
else if (char >= 97 && char <= 122) {
    alert("LOWER CASE")
}
else {
    alert("print krde")
}

// ___QUESTION NO 2___//
var value1;
var value2;

value1 = prompt("Enter number 1")
value2 = prompt("Enter number 2")

if (value1 > value2) {
    alert(value1 + " is bigger then " + value2)
}

else if (value2 > value1) {
    alert(value1 + " is less then " + value2)
}
else if (value1 == value2) {
    alert(value1 + " both values are equal " + value2)
}
else {
    alert("VALUE ENTER KRDE BHAI")
}

// ___QUESTION NO 3____//

var data1;
data1 = prompt("ENTER A NUMBER")

if (data1 > 0) {
    alert("NUMBER IS POSITIVE")
}
else if (data1 < 0) {
    alert("NUMBER IS NEGATIVE")
}
else {
    alert("NUMBER IS ZERO")
}

// ___QUESTION NO 4___//
var vowel;
vowel = prompt("ENTER A ALPHABET \n A PROGRAM TO CHECK ALPHABET IS VOWEL OR NOT")
if (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u") {
    alert("alphabet is vowel")
}
else {
    alert("Alphabet is not a vowel")
}

// ___QUESTION NO 5___//

var password = prompt("Enter your password")
var password1 = prompt("Re-Enter your password")

if (password == password1) {
    alert("Correct! The password you Entered matches the original password")
}
else {
    alert("Password is Incorrect")
}

// ___QUESTION NO 6___//
var greeting;
var hour;
hour = prompt("Enter time in 24hr format")
if (hour < 18) {
    alert("Good day")
}
else {
    alert("Good evening")
}

