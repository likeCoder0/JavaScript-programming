// console.log(document.cookie);
document.cookie="name=Anchal";
document.cookie="name2=Jay";
console.log(document.cookie);
document.cookie="name=Harsh";
console.log(document.cookie);
let key=prompt("Enter the key.");
let value=prompt("Enter the value.")
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie)