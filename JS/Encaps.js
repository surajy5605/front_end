class Acc{
    #url;
   constructor(name,url,IFSC){
    ((this.name=name),(this.#url=url),(this.IFSC=IFSC));
   } 
}
const p1= new Acc("Suraj","http://org.com/men","KKBK001381");
console.log(p1);