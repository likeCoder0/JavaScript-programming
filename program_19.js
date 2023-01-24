let num = [8, 3, 4, 2];
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}
//foreach loop
num.forEach((element) => {
    console.log(element * element)
})
//Array.from
let name="Anchal";
let arr=Array.from(name);
console.log(arr);

//for of
for(let obj of num){
    console.log(obj);
}
//for in
for(let key in num){
    console.log(num[key]);
}