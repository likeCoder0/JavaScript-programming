let p1=new Promise(
    (resolve,reject)=>{
        setTimeout(() => {
            // resolve("promise p1 is resolved.")
            reject(new Error("error."))
        }, 1000);
    }
)
let p2=new Promise(
    (resolve,reject)=>{
        setTimeout(() => {
            resolve("promise p2 is resolved.")
        }, 2000);
    }
)
let p3=new Promise(
    (resolve,reject)=>{
        setTimeout(() => {
            resolve("promise p3 is resolved.")
        }, 3000);
    }
)
// let promise_all=Promise.all([p1,p2,p3])
// let promise_all=Promise.allSettled([p1,p2,p3])
// let promise_all=Promise.race([p1,p2,p3])
// let promise_all=Promise.any([p1,p2,p3])
// let promise_all=Promise.resolve(5)
let promise_all=Promise.reject(new Error("Hey"))
promise_all.then(
    (value)=>{
        console.log(value);
    }
)