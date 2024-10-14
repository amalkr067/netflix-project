
class Student{

    name;
    yob;

    constructor(name,yob){
        this.name = name;
        this.yob = yob;

    }

    getAge(){

        return new Date().getFullYear()-this.yob;
    };
    getName(){
        return this.name;
    };
}

var student1 = new Student("Amal",2001);
var student2 = new Student("Sanika",2003);
var student3 = new Student("Nima",1999);

console.log(student1);
console.log(student2);
console.log(student3);