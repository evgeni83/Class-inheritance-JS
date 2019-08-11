class Vehicle {
  constructor(mark, model, fuelCapacity, fuelСonsumption) {
    this.mark = mark;
    this.model = model;
    this.fuelCapacity = fuelCapacity;
    this.fuelСonsumption = fuelСonsumption;
    this.cruisingRange = () => (parseInt(this.fuelCapacity) / parseInt(this.fuelСonsumption)) * 100;
  }  

  message(military = false) {
    console.log(`${this.type} ${this.mark} ${this.model} при полной заправке ${this.movingMethod} ${this.cruisingRange()} километров.`);

    if (military) {
      console.log(`${this.mark} ${this.model} - это военный ${this.type}`);
    }
  }
};

class Car extends Vehicle {
  constructor(...rest) {
    super(...rest);
    this.type = 'автомобиль';
    this.movingMethod = 'проезжает';
  }
};
class Plane extends Vehicle {
  constructor(...rest) {
    super(...rest);
    this.type = 'самолет';
    this.movingMethod = 'пролетает';
  }
};
class Ship extends Vehicle {
  constructor(...rest) {
    super(...rest);
    this.type = 'корабль';
    this.movingMethod = 'проходит';
  }
};

const car = new Car('BMW', 'X5', 50, 10);

car.message();

const jet = new Plane('Su', '27', 3000, 50);

jet.message(true);

const boat = new Ship('Yamaha', '2000', 150, 40);

boat.message();