//1
function Car(name, model, color, year) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.year = year;
}

const Car1 = new Car("BMw", "M5", "Black", 2026);
console.log("Car Detail 1=", Car1)


const Car2 = new Car("Honda", "City", "Silver", 2022);
console.log("Car Detail 2=", Car2)

const Car3 = new Car("Hyundai", "Creta", "White", 2023);
console.log("Car Detail 3=", Car3)

const Car4 = new Car("Mahindra", "Scorpio N", "Black", 2024);
console.log("Car Detail 4=", Car4)

const Car5 = new Car("Tata", "Harrier", "Grey", 2025);
console.log("Car Detail 5=", Car5)


//2

function Bike(name, model, color, year) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.year = year;

}

const Bike1 = new Bike("Royal Enfield", "Continental GT 650", "Black", 2026);
console.log("Bike Detail 1=", Bike1)

const Bike2 = new Bike("Ducati", "Panigale V4", "Red", 2025);
console.log("Bike Detail 2=", Bike2)

const Bike3 = new Bike("BMW", "S 1000 RR", "Blue", 2024);
console.log("Bike Detail 3=", Bike3)
