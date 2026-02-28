// function getData(){
// let value=document.body.getElementsByTagName
// ('h1');
// console.log('value');

// for (let i=0; i< value.length; i++){
//     console.log('value[${i}].innerText:->'
//         ,value[i].innerText);
// }




// console.log(Array.isArray(value));
// let valueOfArr= Array.from(document.body.getElementsByTagName('h1'));
// // console.log(Array.isArray(valueOfArr));
// valueOfArr.map((el)=>{
//     console.log(el.innerText);
// });
// }
// getData();


// const handleAdd = () =>{
//     const text =document.getElementById('textvalue').value;

//     const output =document.getElementsByClassName(
//     'output')[0];
//     output.innerHTML='';
//     const p = document.createElement('p');
//     p.innerText=text;
//     output.append(p);
// };


const createJokes=()=>{
    const BASE_URL = 'https://official-joke-api.appspot.com/random_joke';
    fetch(BASE_URL)
    .then((res)=>res.json())
    .then((res)=> renderUI(res))
    .catch((err)=>console.log(err));
    
};

const renderUI =(value)=>{
    console.log('value');
    const output= document.getElementsByClassName
    ('output')[0];

    output.innerHTML='';


    const id=document.createElement('h1');
    const punchline=document.createElement('h2');
    const setup=document.createElement('h3');
    const type=document.createElement('h4');

    id.textContent = value.id;
    punchline.innerText=value.punchline;
    setup.textContent=value.setup;
    type.textContent= value.type;

    punchline.style='color:tomato;background:#000';
    output.append(id,punchline,setup,type);
};
