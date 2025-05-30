class Employee{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    salary = "";
    #jobDescription = [];

    getEmployeeInfo(){
        return{name: this.name, email: this.email}
    }
    setJobDescription( description){
        this.#jobDescription.push(description);
    }

    getJobDescription(){
        return this.#jobDescription;
    }

    doFollow(){
        return"You are following!";
    }
}

class anotherEmployee extends Employee{
     constructor(name, email){
        super(name, email);
    }

    getAnotherEmployeeInfo(){
        return "I am another employee";
    }
}

module.exports = Employee;

// var ali = new Employee("ali", "ali@gmail.com");
// console.log(ali.getEmployeeInfo());
// ali.setJobDescription("Send emails at the morning");
// console.log(ali.getJobDescription());
// console.log(ali.jobDescription);

var kashif = new anotherEmployee("kashif", "kashif@gmail.com");
console.log(kashif.getEmployeeInfo());
console.log(kashif.getAnotherEmployeeInfo());
console.log(kashif.doFollow());
