// let arr=[1,2,3];
// arr.push(4,5,6);

// console.log(arr);
// let ans = arr.slice(0,1,2);
// console.log(ans);

// console.log(arr);



//hof



let arr=[]
for(i=1;i<501;i++){
   
    arr.push(i)}

const filterVal=arr.filter((el)=>el>50 && el<252 && el%2==0 )
console.log(filterVal);
