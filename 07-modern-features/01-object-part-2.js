var employee = {
    name: "",
    age: "",
    salary: "",
    getEmplyeeInfo: function(){
        console.log(`Employee name is ${this.name}`);
    },
}

var emp1 = Object.create(employee);
emp1.name = "Ali";
// console.log(emp1);
// emp1.getEmployeeInfo(); output: Employee name is
// console.log(emp1.name);
emp1.getEmplyeeInfo();

var emp2 = Object.create(employee);
emp2.name = "Kashif";
emp2.age = 25;
emp2.salary = 30000;

emp2.getEmplyeeInfo();