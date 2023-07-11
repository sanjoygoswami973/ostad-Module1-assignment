/* ===============Your Name================*/
var Name = "Sanjoy Goswami Jotirmoy"
document.write("Name: " + Name + "</br>");

/* ===============Your Age================*/
var age = 21;
document.write("Age: " + age + "</br>");

/* ===============Are You Student================*/
var isStudent = true;
var worker = false;
document.write("Is Student: " + isStudent + "</br>");
document.write("Is Worker: " + worker + "</br>");

/* ===============Your Hobbis================*/
var Hobbis=["Playing Cricket","Watch Movie","Reading Book"];
document.write("Hobbis: " + Hobbis + "</br>");
console.log(Hobbis[1]);
console.log(Hobbis[2]);

/* ===============Your Address================*/
var Address = {
    Street: "Baghia,Moheshpur,Kashiani",
    City: "Gopalganj",
    Country: "Bangladesh"
}

document.write("Address: " + Address.Street)

/* ===============Print Information================*/
console.log ("My name is " + Name + ".")
console.log ("I am " + age + " years old.")
console.log ( "I am a student: " + isStudent + ".");
console.log ("My hobbies are " + Hobbis + ".");
console.log ("I live at " + Address.Street + "," + Address.City + "," + Address.Country +".");