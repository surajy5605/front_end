import react from 'react'

const App=()=>{
  let counter=0;
  console.log(counter);

  const Increment =() =>{
    counter++;
    document.querySelector('h1').innerText ='Counter' ${counter};
    console.log('inc',counter);
  
  };
  const Decrement = ()=>{
    counter--;
    document.querySelector('h1').innerText = 'Counter' ${counter};
    console.log('dec',counter);
  };
  return(
    <>
    <h1>Counter {counter}</h1>
    <button onClick={Increment}>Inc</button>
    <button onClick={Increment}>Inc</button>
    
    </>
  );
};
export{App};
