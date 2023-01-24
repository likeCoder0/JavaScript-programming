let num=Math.round(Math.random()*100);
let guess_num;
let chances=100;
do{
    guess_num=prompt("Guess the number.");
    guess_num=Number.parseInt(guess_num);
    if(num<guess_num){
        console.log("The number is Smaller than",guess_num,"and you left",--chances,"chances.");
    }else if(num>guess_num){
        console.log("The number is greater then",guess_num,"and you left",--chances,"chances.");
    }else{
        console.log("Congralution, You guess the right number. And you left",--chances,"chances.");
    }
}while(guess_num!=num && chances!=0);