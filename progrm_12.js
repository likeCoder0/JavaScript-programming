//q1
const marks={
    "harry":98,
    "rohan":70,
    "aakash":7
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("Mark of",Object.keys(marks)[i],"is",marks[Object.keys(marks)[i]])
    
}
for(let keys in marks){
    console.log("Mark of",keys,"is",marks[keys])
}

// let guessNum=5;
// guessNum=Number.parseInt(guessNum);
// let i;
// while(i!=guessNum){
//     i=prompt("Guess the Number.")
// }

let mean=(num1,num2,num3,num4,num5)=>{
    return (num1+num2+num3+num4+num5)/5;
}
let num1=5,num2=7,num3=3,num4=8,num5=14;
console.log("Mean of 5 number is:",mean(num1,num2,num3,num4,num5))