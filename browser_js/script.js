console.log(console);
console.error("error");
console.info("info");
console.warn("warn");
console.assert("err"!=false);
console.assert("err"==false);
console.time("for_loop");
for(let i=0;i<10;i++){
    console.log(i);
}
console.timeEnd("for_loop");