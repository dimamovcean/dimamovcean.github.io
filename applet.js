let mixin = {
  madeIn() {
    console.log( `made in EU` );
  }
}

let carMixin = {
  __proto__: mixin,

  madeIn() {
    super.madeIn();
  }
}

class Car {
  constructor(doors, engine, color) {
      this.doors = doors;
      this.engine = engine;
      this.color = color;
  }

  describeCar() {
    return `a good car: ${this.doors}, ${this.engine}, ${this.color}`;
    
  } 
}

class Vehicle extends Car {
  constructor(doors, engine, color, brand, describeCar){
    super(doors, engine, color, describeCar);
    this.brand = brand;
    this.wheels = 4;


    Object.assign(this, carMixin);
  }

  showBrand() {
    return `brand is ${this.brand}`;
  }
}


const mx5 = new Car(4, 'V6', 'blue');
const mx7 = new Vehicle(4, 'V6', 'blue', 'honda');