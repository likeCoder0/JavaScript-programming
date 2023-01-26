//change the color of card titile
let ctitle=document.getElementById("card_first_title");
ctitle.style.color="red";

let ctitles=document.querySelectorAll(".card-title");
ctitles[0].style.color="blue";
ctitles[1].style.color="red";
ctitles[2].style.color="green";
console.log(ctitles);

document.querySelector(".this").style.color="cyan";
document.querySelector(".this").style.background="red";

console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))
console.log(document.getElementsByName("Search"))
Array.from(document.getElementsByTagName("li")).forEach((element){
    element.style.backgroundColor="cyan";
})