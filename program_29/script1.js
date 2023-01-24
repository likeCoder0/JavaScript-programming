let age;
let run_again=true;
let drive = (age) => {
    return age >= 18 ? true : false;
}
do {
    age = prompt("Enter your age?");
    age = Number.parseInt(age);
    if(age<1){
        console.error("Entered age is not valid");
        break;
    }
    if (drive(age)) {
        alert("Yes, You can drive.")
    } else {
        alert("You can't drive.");
    }
    run_again = confirm("Do you want play again?")
} while (run_again != false)