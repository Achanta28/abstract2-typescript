import Car from "./abstract";

class GasCar extends Car{
    noOfTyres: Number=4;
    engineCapacity:Number;
    startEngine(): void {
    console.log(`${this.make} GasCar Engine Started`);
    }
    constructor(make:string,model:string,engineCapacity:Number){
        super(make,model);
        this.engineCapacity=engineCapacity;
        
    }

    displayEngineInfo():void{
        console.log(`${this.make} Engine Capacity:${this.engineCapacity}L`)
    }
}
export default GasCar;