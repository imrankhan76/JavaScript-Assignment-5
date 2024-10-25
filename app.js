// ************************************************CH # STRING METHODS*************************************************


// ************************************************Ques# 1*************************************************

var firstname=prompt("Enter first name")
var secondname=prompt("Enter second name")
var fullname=(firstname+secondname)
alert(fullname)
// ************************************************Ques# 2*************************************************

var input_model=prompt("Input your favorite mobile phone model.")
document.write(`My favourite mobile phone is: ${input_model}</br>Length of string: ${input_model.length}</br><hr>`)
// ************************************************Ques# 3*************************************************
var string="Pakistani"
document.write(`String: ${string}</br>index of "n": ${string.indexOf("n")}</br><hr>`)

// ************************************************Ques# 4*************************************************

var string2="Hello world"
document.write(`String: ${string2}</br>Last index of "l": ${string2.lastIndexOf("l")}</br><hr>`)
// ************************************************Ques#5*************************************************
var string3="Pakistani"
document.write(`String: ${string3}</br>Character at index  "3": ${string3[3]}</br><hr>`)


// ************************************************Ques# 6*************************************************

var fullname=(firstname.concat(secondname))
alert(fullname)
// ************************************************Ques# 7*************************************************

var city="Hyderabad"
document.write(`City: ${city}</br>`)
var replace=city.replace("Hyder","Islam")

document.write(`After replacement: ${replace}</br><hr>`)
// ************************************************Ques# 8*************************************************

var message="“Ali and Sami are best friends. They play cricket and football together.”"
document.write(`Message: ${message}</br>`)
var replacement=message.replaceAll("and","&")

document.write(`After replacement: ${replacement}</br><hr>`)

// ************************************************Ques# 9*************************************************

var val="472"
document.write(`Value: ${val}</br>`)
document.write(`Type : ${typeof(val)}</br>`)
var to_int=parseInt(val)
document.write(`Value: ${parseInt(to_int)}</br>`)
document.write(`Type : ${typeof(to_int)}</br><hr>`)
// ************************************************Ques# 10*************************************************

var case1=prompt("Input word to Convert in capital letter")
document.write(`User input : ${case1}</br>`)
document.write(`Upper case : ${case1.toUpperCase()}</br> <hr>`)
// ************************************************Ques# 11*************************************************

var case2=prompt("Input something and  convert it into title case")
document.write(`User input : ${case2}</br>`)
document.write(`Title case : ${case2.slice(0,1).toUpperCase()+case2.slice(1).toLowerCase()}</br><hr>`)
// ************************************************Ques# 12*************************************************

var num = 35.36 ;
document.write(`Number: ${num}</br>`)

var string=num.toString()
document.write(`Result: ${string.replace(".","")}</br><hr>`)



// ************************************************Ques# 13*************************************************



var userInput=prompt("Enter username")



var found = false; 


for (var i = 0; i < userInput.length; i++) {
    if (userInput[i].charCodeAt() === 33|| userInput[i].charCodeAt() == 44 || userInput[i].charCodeAt() === 46 || userInput[i].charCodeAt() === 64) {
        found = true;
      
        break; 
    }
}

if (found) {
  alert("Please enter a valid username");
} else {
    alert("Your username "+userInput+" registered");
}


// ************************************************Ques# 14*************************************************

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var bakery = prompt("Welcome to Imran's Bakery. What do you want to order, sir/ma'am?");

var found = false; 
var itemIndex; 


for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === bakery.toLowerCase()) {
        found = true;
        itemIndex = i;
        break; 
    }
}

if (found) {
    alert(bakery + " is available at index " + itemIndex + " in our bakery.");
} else {
    alert("We are sorry, " + bakery + " is not available in our bakery.");
}


// ************************************************Ques# 15*************************************************



var pass = prompt("Enter password");

var isValid = false;

if (pass.length >= 6) {
    if (!(pass[0].charCodeAt() >= 48 && pass[0].charCodeAt() <= 57)) {
        var hasLetter = false;
        var hasNumber = false;

        for (var i = 0; i < pass.length; i++) {
            var charCode = pass[i].charCodeAt();
            if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
                hasLetter = true;
            }
            if (charCode >= 48 && charCode <= 57) {
                hasNumber = true;
            }
        }

        isValid = hasLetter && hasNumber;
    }
}

if (isValid) {
    alert("Password: " + pass);
} else {
    alert("Please enter a valid password");
}

// ************************************************Ques# 16*************************************************


var university = "University of Karachi";

var universityArray = university.split("");
for(var i=0;i<universityArray.length;i++){
document.write( universityArray[i]+"</br><hr>"  )
}
// ************************************************Ques# 17*************************************************
var userinput=prompt("Enter word")

document.write(`User Input: ${userinput}</br>`)
var lastword=userinput[userinput.length-1];

document.write(`Last character of  Input: ${lastword}</br><hr>`)




// ************************************************Ques# 18*************************************************

// 8. You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.
var sentence="The quick brown fox jumps over the lazy dog"
var tolower_sent=sentence.toLowerCase()
var count=0;
var words=tolower_sent.split(" ")
for(var i=0;i<sentence.length;i++){
    if(words[i]==="the"){
        count++

    }
}
document.write(`Text: ${sentence}</br>`)

document.write(`There are ${count} occurrences of word “the” </br><hr>`)

// ************************************************CH # MATH METHODS*************************************************
// ************************************************Ques# 1*************************************************

document.write(`<h3>Positive integer </h3>`)
var numb=+prompt("Enter Positive integer number")
document.write(`number: ${numb}</br>`)
document.write(`round off: ${Math.round(numb)}</br>`)
document.write(`floor value: ${Math.floor(numb)}</br>`)
document.write(`ceil value: ${Math.ceil(numb)}</br><hr>`)

// ************************************************Ques# 2*************************************************


document.write(`<h3> negative floating point
 </h3>`)

var numb=+prompt("Enter Negative floating point")
document.write(`number: ${numb}</br>`)
document.write(`round off: ${Math.round(numb)}</br>`)
document.write(`floor value: ${Math.floor(numb)}</br>`)
document.write(`ceil value: ${Math.ceil(numb)}</br><hr>`)



// ************************************************Ques# 3*************************************************

var num=+prompt("Enter a number")

document.write(`The absolute value of ${num} is ${Math.abs(num)}</br><hr>`)

// ************************************************Ques# 4*************************************************

document.write(`Random dice value: ${Math.floor(Math.random()*6+1)}</br><hr>`)
// ************************************************Ques# 5*************************************************

var toss=Math.floor(Math.random()*2+1)


if(toss===1){
    document.write(` ${toss} </br> Random coin value: Heads <hr>`) 
}
else{
    document.write(` ${toss} </br> Random coin value: Tails  <hr>`) 

}
// ************************************************Ques# 6*************************************************

document.write(`random number between 1 and 100: ${Math.floor(Math.random()*100+1)}</br><hr>`)

// ************************************************Ques# 7*************************************************

var userWeight = prompt("enter weight")

var parseiiint = userWeight.toString()
alert("User input weight"+" "+ parseiiint)

// ************************************************Ques# 8*************************************************

var select_num=+prompt("Choose a number from 1 to 10")
var secret_num=Math.floor(Math.random()*10+1);

if(select_num===secret_num){
    alert("Bingo! Correct answer")
}



else{
    alert("Incorrect! Try again")
}














