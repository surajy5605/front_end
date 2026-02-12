let obj={
   animal:'dog',
   married:false,
   age:44,
   city:['pune','kolhapur','nashik'],
   hobbie:{
    virtual:'pubg',
    outdoor :'cricket',
    myName: function(){
        console.log(this.animal);
},},
};
for (let key in object){
    console.log('this is key ${key} this is value',object[key]);
}











