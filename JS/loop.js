// //print number from 1 to 10//
//   for (i=1; i<11;i++){


//    console.log(i);}


// //print even number between 1to 50//
// console.log("these are the even numbers")
// for (i=0; i<=50;i++)
// {   if(i%2==0)
//     console.log(i)
// }

// // print odd number between 1to 50//
// console.log("these are the even numbers")
// for (i=1; i<=50;i++)
//     if(i<11)
// {  
//     console.log(`5 X ${i}=${5*i}`);
// }
// //print sum of 1 to 100//
// console.log(`\n`)



// for( i=1;i<11;i++)
// {  j=i*i
//     console.log(j)
// }

// for(i=1;i<11;i++)
//    if(i%3==0)
//    { console.log(i)
//    }



// let num = process.argv[2]
// fact = 1
// for (i = 1; i <= num; i++) { fact = fact * i }
// console.log(fact)


// let start =1;
// let end = 10;

// while( start<= end){
//     console.log(start)
//     start++;
// }
// let given =5;
 
//  let start_1=1;
//  let result=1;

//  while(
//     start_1<=given){
//         result= result * start_1;
//         start_1++;
//     }
//     console.log(result)
     


function prime(n){

    for(i=2;i<n;i++){
    
        if(n % i === 0){
        return false;
        }
    }
    return true;
}

    for(let i=2;i<=100;i++){
        if (prime(i)){
            console.log(i);
        }
    }

