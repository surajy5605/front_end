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


// console.log("A");
// const timeout = ()=>{
//     console.log("B");
//     let id = setTimeout(()=>{
//         console.log("this is setTimeOut");

//     }, 3000);
//    console.log('C');    
// };
// console.log('D');
// timeout();
// console.log('E');


// // set interval

// console.log("A");
//  const timeOut_1=()=>{
//     console.log('B');
//     let id= setInterval(()=>{
//         console.log('this is setInterval');



        
//     },3000);
//     console.log('C');

//  };
//  console.log("D");
//  timeout_1();
//  console.log('E');



// let Promise_1 = new Promise((res,_)=>{
//     setTimeout(()=>{
//         res('hello');
//     },2000);
// });

// let Promise_2 = new Promise((res,_)=>{
//     setTimeout(()=>{
//         res('hello');
//     },3000);
// });

// let Promise_3 = new Promise((res,_)=>{
//     setTimeout(()=>{
//         res('hello2');
//     },4000);
// });


// async function getdata(){
//     try{
//         let res = await Promise.all([Promise_1,Promise_2,Promise_3]);
//         console.log(res);
//     }catch (error){
//         console.log(error);
//     }
// }
// getdata();





let Promise_1= new Promise((res)=>{
    setTimeout(()=>{
        res(Math.floor(Math.random()*10));
    },500);
});


let Promise_2= new Promise((res)=>{
    setTimeout(()=>{
        res(Math.floor(Math.random()*10));

    },1000);
});


 async function getData(){
    let res =   await Promise.all([Promise_1,Promise_2]);
    console.log(res)
    let result = res.reduce((acc,curr)=>{
        return acc+curr
    })
    console.log(result)
}
getData();