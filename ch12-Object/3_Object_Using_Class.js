//1


class Employee {
    constructor(Name, Salary, Age, Experience) {
        this.Name = Name;
        this.Salary = Salary;
        this.Age = Age;
        this.Experience = Experience;
    }
}

const Employee1 = new Employee("Dharmik",51000,18,2)
console.log("Employye Detail 1",Employee1)


const Employee2 = new Employee("Ankit",51001,22,3)
console.log("Employye Detail 1",Employee2)


const Employee3 = new Employee("Prince",51001,18,2)
console.log("Employye Detail 1",Employee3)


//2


class rank{
    constructor(name,rank,mark,prize){
        this.name=name;
        this.rank=rank
        this.mark=mark;
        this.prize=prize;

    }
}

const rank1=new rank("Dharmik",1,99,"gold medal")
console.log("Rank 1 :",rank1);

const rank2=new rank("Ankit",2,97,"Silver medal")
console.log("Rank 2 :",rank2);

const rank3=new rank("Prince",3,95,"Bronze medal")
console.log("Rank 3 :",rank3);
