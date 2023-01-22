//run on broswer console
let age=prompt("Enter your age?");
// alert("find me");
age=Number.parseInt(age);
if (age<0) {
    alert("This is not a valid age.");
}
else if(age<18){
    alert("you are a child.");
}
else if(age<60){
    alert("you are a adult.");
}
else{
    alert("You are too old.");
}
//condition expression?true:false
console.log("you can",(age<18)?"not drive":"drive");