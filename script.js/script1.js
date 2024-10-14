class Person{
   
    getDetails(){

    }
    constructor(){
        
        let name,marks;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name= name;
    }
}



class Student extends Person{

    constructor(){
        super(name,age);
        let grade;
    }
    getDetails(){

    }
} 

class Employee extends Person{
    
    calculateSalary(){

    }
    
}



let Manager = new Person();

Manager.setName("Amal");
console.log(Manager.getName());
