//Question-21

let student_info = {
    name: "Ayesha",
    field: "Applied Physics",
    cgpa: 3.67,
}
console.log(student_info);

//Question-22

// let nameOfStudents = ["Laiba", "Hina", "Hamna", "Yumna", "Sidra"];

// console.log(nameOfStudents[5]); // this will show an undefined output because total length of the array is from 0-4

// console.log(nameOfStudents{4}); //this will show an error because the index of array is represented in square braces instead of curly braces

// console.log(nameOfStudents[4]); //Now the error is reduced

//Question-23

let car = "Ali";
console.log("Is Car == Ali? Predict true");
console.log(car == "Ali");

let book = "Hamza";
console.log("Is this book == Ali? Predict false");
console.log(book == "Ali");

let student = "Muneeba";
console.log("Is Muneeba == Student? Predict true");
console.log(student == 'Muneeba');

let playFootball = "Hadi";
console.log("Is Hadi not play football? predict false");
console.log(playFootball != "Hadi");

let houseRent = 30000;
console.log("Is your house rent == 30000? Predict true");
console.log(houseRent == 30000);

let literacyRateInPak = 76.5;
console.log("Is literacy rate in Pakistan == 75? Predict false");
console.log(literacyRateInPak == 75);

let highest_marks = 90;
console.log("Is highest marks == 90? Predict true");
console.log(highest_marks == 90);

let bestPlaceToVisit = "Saudia Arabia";
console.log("Is switzerland best place to visit? predict false");
console.log(bestPlaceToVisit == "Switzerland");

let temperature = 34.5;
console.log("Is temperature == 34.5? Predict true");
console.log(temperature == 34.5);

let eidVacations = "After 25th Of Ramadan";
console.log("Is eidVacations == After 20th Of Ramadan? Predict false");
console.log(eidVacations == "After 20th Of Ramadan");

//Question-24

let person_1 = "ABC";
let person_2 = "FGH";
let person_3 = "ACB";

if(person_1 == person_2){
    console.log("Both are equal!");
}
else{
    console.log("Both are not not equal!");
}

if(person_1 != person_3){
    console.log("Both are equal!");
}
else {
    console.log("Both are not equal!");
}

if(person_2 != person_3){
    console.log("Both Are Unequal");
}

let age1 = 20;
let age2 = 18;
let age3 = 60;

if(age1 == 20){
    console.log("You are eligible to go here!");
}

if(age3 != 20){
    console.log("You are not eligible to go here!");
}

if(age3 >= age2 ){
    console.log("Age-3 is older than Age-2");
}
else{
    console.log('Age-3 is younger than Age-2');
}

if(age2 <= age1){
    console.log("Age-1 is older");
}
else{
    console.log("Age-2 is older");
}

if(age1 == 20 && age2 == 18 ){
    console.log("You are eligible to vote");
}
else{
    console.log("Not Eligible to vote");
}
if(age1 == 20 || age2 == 19){
    console.log("Eligible to vote ");
}
else{
    console.log("Not eligible to vote");
}
let array_list : string[] = ["Karachi","Islamabad",'Lahore',"Kashmir"];
if(array_list.includes("Karachi")){
    console.log("Karachi is in the given list");
}
else{
    console.log("karachi is not present in the given list");
}

if(array_list.includes("Rawalpindi")){
    console.log("The given name is included in the list");
}
else{
    console.log("The given name is not included in the given list");
}

//Question-25

// let alien_color = "green";

// if(alien_color == "green"){
//     console.log("You earned 5 points!");
// }

// let alienColor = "yellow";

// if(alienColor == "green"){
//     console.log("You earned 5 points!");
// }

//Question-26

//to print if-statement:

// let alien_colour = "green";

// if(alien_colour == "green"){
//     console.log("You earned 5 points to shoot the aliens!");
// }
// else {
//     console.log("You earned 10 points!");
// }

// //to print else-statement

// let alienColour = "red";

// if(alienColour == "green"){
//     console.log("You earned 5 points to shoot the aliens!");
// }
// else {
//     console.log("You earned 10 points!");
// }

//Question-27

let alien1 = "green";

if(alien1 == "green"){
    console.log("You earned 5 points!");
}

else if(alien1 == "yellow"){
    console.log("You earned 10 points!");
}

else{
    console.log('"You earned 15 points!');
}

let alien2 = "yellow";

if(alien2 == "green"){
    console.log("You earned 5 points!");
}

else if(alien2 == "yellow"){
    console.log("You earned 10 points!");
}

else{
    console.log('"You earned 15 points!');
}

let alien3 = "red";

if(alien3 == "green"){
    console.log("You earned 5 points!");
}

else if(alien3 == "yellow"){
    console.log("You earned 10 points!");
}

else{
    console.log('You earned 15 points!');
}

//Question-28

let person_age = 100;

if(person_age < 2 ){
    console.log("The person is a baby.");
}
else if(person_age >=2 && person_age < 4){
    console.log("The person is a toddler.");
}
else if(person_age >=4 && person_age < 13){
    console.log("The person is a kid.");
}
else if(person_age >=13 && person_age < 20){
    console.log("The person is a teenager.");
}
else if(person_age >=20 && person_age < 65){
    console.log("The person is an adult.");
}
else if(person_age >= 65){
    console.log("The person is an elder.");
}

//Question-29

let fav_fruits = ["Apple" , "Orange", "Mango"];

if(fav_fruits.includes("Apple")){
    console.log("You really like Apple");
}
if(fav_fruits.includes("Mango")){
    console.log("You really like Mango");
}
if(fav_fruits.includes("Orange")){
    console.log("You really like Orange");
}
if(fav_fruits.includes("Cherry")){
    console.log("You really like Cherry");
}
if(fav_fruits.includes("Banana")){
    console.log("You really like Banana");
}

//Question-30

let users = ["Admin","Eric","Harry", "John"];

for(let user of users){
    if(user == "Admin"){
        console.log("Hello Admin! Would you like to check the status report?");
    }
    else {
        console.log(`hello ${user}! Thanks for logging in again.`)
    }
}




