import Car from "./abstract";

class ElectricCar extends Car{
    noOfTyres: Number=4;
    batteryCapacity:Number;
    startEngine(): void {
        console.log(`${this.make} Electic Car Engine Stared Silently`)
    }
    constructor(make:string,model:string,batteryCapacity:Number){
        super(make,model);
        this.batteryCapacity=batteryCapacity;
    }
    displayBatteryInfo():void{
        console.log(`${this.make} battery Capacity: ${this.batteryCapacity} kmh`)
    }
}
export default ElectricCar;