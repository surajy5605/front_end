let base_Api="https://faketoreapi.com/products";

const ApiCall = async()=>{
    // fetch(Base_Api)
    // .then((res)=> res.json())
    // .then((res)=> console.log(res))
    // .catch((err)=>console.log(err));

    try{
        let res =await fetch(Base_Api);
        let value= await res.json();
        console.log(value);
    }catch(error){
        console.log('error');

    }

};
ApiCall();