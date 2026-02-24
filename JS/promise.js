// let iceCream= new Promise((res ,rej)=>{
//     let value=true;

//     if (value){
//     res("got it ...");
//     }
//     else{
//         rej("call mom");
//     }
// });

// iceCream 
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
// .finally(() => console.log("finally fullfilled✅"));


console.log("A");
const timeout = ()=>{
    console.log("B");
    let id = setTimeout(()=>{
        console.log("this is setTimeOut");

    }, 3000);
   console.log('C');    
};
console.log('D');
timeout();
console.log('E');


// set interval

console.log("A");
 const timeOut_1=()=>{
    console.log('B');
    let id= setInterval(()=>{
        console.log('this is setInterval');



        
    },3000);
    console.log('C');

 };
 console.log("D");
 timeout_1();
 console.log('E');

