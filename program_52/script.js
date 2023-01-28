function loadScript(src,callback){
    var script=document.createElement("script");
    script.src=src;
    script.onload=function(){
        console.log("Loaded script with $RC:"+src);
        callback(null,src);
    }
    script.onerror=function(){
        console.log("Error on srcipt : "+src);
        callback(new Error("Src got some error."))
    }
    document.body.appendChild(script);
}
function hello(error,src){
    if(error){
        console.log(error);
        return;
    }
alert("Hello World!"+src)
}
function good_morning(error,src){
    if(error){
        console.log(error);
        sendEmergencyMessageToCEO();
        return;
    }
alert("good morning"+src)
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",good_morning);