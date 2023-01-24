let num = [8, 3, 4, 2];
// console.log(num);
//map method
let a=num.map(
    (value)=>{
        // console.log(value);
        return value+5;
    }
)
// console.log(a)
//filter method
let b=num.filter(
    (value)=>{
        return value<4;
    }
)
// console.log(b);
//reduce method
const reduce_funct=(h1,h2)=>{
    return h1+h2;
}
let c=num.reduce(reduce_funct);
console.log(c)