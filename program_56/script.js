// let p1 = new Promise(
//     (resolve, reject) => {
//         setTimeout(
//             () => {
//                 console.log("Resolved after 2 seconds.");
//                 resolve("20")
//             }, 2000
//         )
//     }
// )
// p1.then(
//     (value) => {
//         console.log(value);
//         return new Promise(
//             (resolve, reject) => {
//                 setTimeout(() => {
//                     resolve("promise 2.");
//                 }, 2000);
//             }
//         )
        
//     }
// ).then(
//     (value) => {
//         console.log("we done.");
//         return 2;
//     }
// ).then(
//     (value)=>{
//         console.log("We are finally done.")
//     }
// )
const loadScript=(src)=>{
    return new Promise(
        (resolve,reject)=>{
            let script=document.createElement('script');
            script.type="text/javascript";
            script.src=src;
            document.body.appendChild(script);
            script.onload=(script)=>{
                resolve("Script is loaded sir.");
            }
            script.onerror=()=>{
                reject(0);
            }
        }
    )
}
let p1=loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js");
p1.then(
    (value)=>{
        console.log(value);
        return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js");
    }
).then(
    (value)=>{
        console.log("second script is ready.")
    }
).catch(
    (error)=>{
        console.log("we are sorry but this script is not loading.")
    }
)