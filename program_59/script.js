async function anchal() {

    let mumbai_weather = new Promise(
        (resolve, reject) => {
            setTimeout(() => {

                resolve("30 degree.")
            }, 2000);
        }
    )
    let delhi_weather = new Promise(
        (resolve, reject) => {
            setTimeout(() => {

                resolve("20 degree.")
            }, 5000);
        }
    )
        console.log("fetching mumbai weather please wait...");
        let mumbai_w= await mumbai_weather;
        console.log("fetched mumbai weather is:"+mumbai_w);
        console.log("fetching delhi weather please wait...");
        let delhi_w=await delhi_weather;
        console.log("fetched delhi weather is:"+delhi_w);
        return [mumbai_w,delhi_w];
}
const jay=()=>{
    console.log("Hey, i am jay and i am wait.")
}
const main1=async()=>{
console.log("Welcome to weather control.");
let a=await anchal();
let b=await jay();
}
main1();