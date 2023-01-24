let computer=Math.round((Math.random()*10)%3);
let you=prompt("Enter Number( snake=0, gun=1 and water=2)");
you=Number.parseInt(you);
if((you==0 &&computer==2) || (you==1 &&computer==0)|| (you==2 &&computer==1) ){
    alert("You win the match.")
}else{
    alert("You lose the match.")    
}
