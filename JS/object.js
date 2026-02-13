// let obj={
//    animal:'dog',
//    married:false,
//    age:44,
//    city:['pune','kolhapur','nashik'],
//    hobbie:{
//     virtual:'pubg',
//     outdoor :'cricket',
//     myName: function(){
//         console.log(this.animal);
// },},
// };
// for (let key in object){
//     console.log('this is key ${key} this is value',object[key]);
// }







let num = +process.argv[2];

if (num < 0) {
    console.log("negative");
}
else if (num == 0) {
    console.log('zero is not positive nor negative');
}
          
else {
    console.log("positive");
}

















 let n =+process.argv[3];

if(n%2==0){
    console.log("even number");
}
else{
    console.log("odd number")
}




let num1 = 10;
let num2 = 20;

if (num1 > num2) {
    console.log(num1 + " is greater");
} else if (num2 > num1) {
    console.log(num2 + " is greater");
} else {
    console.log("Both numbers are equal");
}



