function onePlusAverage(x,y){
    return 1+(x+y)/2;
}

const sum=(x,y)=>{
    return x+y;
}
let a=5;
let b=3;
let c=8;

console.log("One plus Average of a and b :",onePlusAverage(a,b));
console.log("One plus Average of a and c :",onePlusAverage(a,c));
console.log("One plus Average of c and b :",onePlusAverage(c,b));
console.log(sum(a,b))
//pefer arrow function 
const hello=()=>{
    console.log("Hello, how are you?");
    return "hi";
}

let v=hello();
console.log(v)