abstract class Car{
     make:string;
     model:string;
    constructor(make:string,model:string){
        this.make=make;
        this.model=model;

    }
    abstract noOfTyres:Number;

    //abstract method
    abstract startEngine():void;

    //concrete method

    displayInfo=()=>{
        console.log(`make: ${this.make},maodel:${this.model}`)

    }
}
export default Car;