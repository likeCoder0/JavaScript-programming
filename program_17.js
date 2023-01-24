//Array Method
let num=[3,4,6,2];
let a=num.toString();// a is now string
console.log(a);
let b=num.join("_");
console.log(b,typeof b);
let r=num.pop();//pop return the value
console.log(num,r);
let r1=num.push(69);//push return the new length
console.log(num,r1);
let r2=num.shift();//remove first element in the array
console.log(num,r2);
let r3=num.unshift(74);//add first element in the array and return new length
console.log(num,r3);
