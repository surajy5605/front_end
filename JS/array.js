// let arr=[1,2,3];
// arr.push(4,5,6);

// console.log(arr);
// let ans = arr.slice(0,1,2);
// console.log(ans);

// console.log(arr);



//hof



// let arr=[]
// for(i=1;i<501;i++){
   
//     arr.push(i)}

// const filterVal=arr.filter((el)=>el>50 && el<252 && el%2==0 )
// console.log(filterVal);



let arr1=[1,2,3,4,5,6,7,8,9]

const ans44=arr1.forEach((el)=>{
    if (el % 2 ===0){
        console.log(`this is even number ${el}`) 
    } else{
        console.log(`this is odd number ${el}`)
    }
})