const Base_URL ="";
const addTodo=()=>{
    const textValue =document.querySelector('#value').value;
 const todo={
    text:textValue,
    isEdit:false,
    isCompleted:false,
 }   

 fetch(Base_URL,{
    method: "POST",
    headers:{
        'Content-type':'application/json',
    },
    body:JSON.stringify(todo),
 });
};