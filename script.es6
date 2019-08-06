class Vehicle {
  constructor(mark, model, fuelCapacity, fuelСonsumption) {
    this.military = false;
    this.mark = mark;
    this.model = model;
    this.fuelCapacity = fuelCapacity;
    this.fuelСonsumption = fuelСonsumption;
  }
  
  cruisingRange() { 
    return ( parseInt(this.fuelCapacity) / parseInt(this.fuelСonsumption)) * 100
  }

  message() {
    console.log(`${this.type} ${this.mark} ${this.model} при полной заправке ${this.movingMethod} ${this.cruisingRange()} километров.`);
    
    if (this.military) {
      console.log(`${this.mark} ${this.model} - это военный ${this.type}`);
    }
  }
};

class Car extends Vehicle {
  constructor(mark, model, fuelCapacity, fuelСonsumption) {
    super(mark, model, fuelCapacity, fuelСonsumption);
    this.type = 'автомобиль';
    this.movingMethod = 'проезжает';
  }
};
class Plane extends Vehicle {
  constructor(mark, model, fuelCapacity, fuelСonsumption) {
    super(mark, model, fuelCapacity, fuelСonsumption);
    this.type = 'самолет';
    this.movingMethod = 'пролетает';
  }
};
class Ship extends Vehicle {
  constructor(mark, model, fuelCapacity, fuelСonsumption) {
    super(mark, model, fuelCapacity, fuelСonsumption);
    this.type = 'корабль';
    this.movingMethod = 'проходит';
  }
};

const car = new Car('BMW', 'X5', 50, 10);

car.message();

const jet = new Plane('Su', '27', 3000, 50);
jet.military = true;

jet.message();

const boat = new Ship('Yamaha', '2000', 150, 40);

boat.message();