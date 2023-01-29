let p=fetch("./weather.json");
p.then(
    (response)=>{
        return response.json();
    }
).then(
    (value)=>{
        console.log(value);
    }
)