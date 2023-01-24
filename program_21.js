let arr=[9,3,5,34,40,50,4,5,680,40];
// let a;
// do{
//     a=prompt("Enter the number.");
//     a=Number.parseInt(a);
//     arr.push(a);
// }while(a!=0);
// console.log(arr);
// let div_10=arr.filter((x)=>{
//     return x%10==0;
// })
// console.log(div_10);
// let div_10=arr.map((x)=>{
//     return x*x;
// })
// console.log(div_10);
let div_10=arr.reduce((x1,x2)=>{
    return x1*x2;
})
console.log(div_10);