//example 1
const person = {
    firstName: "dharmik",
    LastName: "Ragiya",
    get FullName() {
        return this.firstName + " " + this.LastName;

    }
}

console.log(person.FullName)

//example 2

const sum = {

    firstNumber: 10,
    SecondNumber: 20,

    get SumOfNumber() {
        return this.firstNumber+this.SecondNumber;
    }

}

console.log(sum.SumOfNumber)
