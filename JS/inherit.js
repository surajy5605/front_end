class CAR{
    constructor(name,model){
        this.name=name;
        this.model=model;
    }
}
class SUV extends CAR{
    constructor(...data){
        super(...data);
        this.owner=data[2];
    }
}
class miniSUV extends SUV {
    constructor(...data){
        super(...data);
        this.fitnes=data[3];
    }
}


const car_1= new miniSUV('RR',"phantom","suraj", `30 yrs`)
console.log(car_1);