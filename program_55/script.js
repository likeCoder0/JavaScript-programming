let p1=new Promise(
    function(resolve,reject){
        console.log("Promise is pending")
        setTimeout(() => {
            // console.log("I am a promise and I am resolved.");
            resolve(true);
        }, 5000);
    }
)
let p2=new Promise(
    function(resolve,reject){
        console.log("Promise is pending")
        setTimeout(() => {
            // console.log("I am a promise and I am rejected.");
            reject(new Error("I am a error."))
        }, 5000);
    }
)
console.log(p1,p2);
p1.then(
    (value)=>{
        console.log(value);
    }
)
p2.catch(
    (error)=>{
        console.log("some error occur in p2.")
    }
)