// let age = prompt("enter your age"); use in browser
let age =9;

 if( age > 100){
   console.log("number is invalid");
}
else if( age > 18 && age < 60){
    console.log("adult");
 }else if(age > 60){
    console.log("old");
 }else if( age<18){
    console.log("kid");
 }