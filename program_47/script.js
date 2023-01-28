let x=function(e){
    alert('Hello1')
}
btn.addEventListener("click",x) 
let y=function(e){
    alert('Hello2')
}
btn.addEventListener("click",y)
let n=prompt('Enter the favorite number?');
if(n=="2"){
    btn.removeEventListener('click',x);
} 