let str1="Please give Rs 10000";
let amount=str1.slice("Please give Rs ".length);
amount=Number.parseInt(amount);
console.log(amount);
console.log(typeof amount)

let friend ="Harsh";
friend[3]="A";
console.log(friend);