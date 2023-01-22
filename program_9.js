for(let i=0;i<34;i+=4){
    console.log(i);
}
let factorial=1;
let n=prompt("Enter the finding for factorial.");
n=Number.parseInt(n);
for(let i=1;i<n+1;i++){
    factorial*=i; 
}
console.log("factorial of number is",factorial);

let obj={
    anchal:93,
    jay:97,
    harsh:99,
    sachin:80
}
//for in loop
for(let a in obj){
    console.log("Mark of",a,"is",obj[a])
}
//for of loop
for(let b of "Anchal"){
    console.log(b)
}
