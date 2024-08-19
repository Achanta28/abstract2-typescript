import React from 'react';
import logo from './logo.svg';
import './App.css';
import ElectricCar from './classes/elctricCar';
import GasCar from './classes/gasCar';

function App() {
  //electric Car
  let eleCar = new ElectricCar("Tesla","Model 3",75);
  eleCar.displayInfo();
  eleCar.displayBatteryInfo();
  eleCar.startEngine();

  //Gas Car
  let gasCar = new GasCar("Toyota","Corolla",8);
  gasCar.displayInfo();
  gasCar.displayEngineInfo();
  gasCar.startEngine();


  

  return (
    <div className="App">
      
      
    </div>
  );
}

export default App;
