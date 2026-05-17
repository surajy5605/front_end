import {Form} from './Components/Form';

export const App = () =>{
  const data =[
    {
      _id:1,
      name:'userName',
      placeholder:'enter your user name',
      type:'text',

    },
    {
      _id:2,
      name:'userName',
      placeholder:'enter your user name',
      type:'text',
    },
    {
      _id:3,
      name:'userName',
      placeholder:'enter your user name',
      type:'text',

    },
    {
      _id:4,
      name:'userName',
      placeholder:'enter your user name',
      type:'text',

    }
  ];
   const showValue = (data) => {
    console.log(data);
   };
   return(
    <>
    <Form props={{data, showValue}} />
    </>
   );
  };