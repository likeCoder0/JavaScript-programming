let promise=new Promise(
    function(resolve,reject){
        alert("I am a promise");
        resolve(20);
    }
)
console.log("Hello one");
setTimeout(() => {
    console.log("Hello two");
}, 1000);
console.log("Hello three");