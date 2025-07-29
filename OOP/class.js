class People{

  constructor(name, age){
     this.name = name;
     this.age = age;
  }

  showInfo(){
     console.log(`Nombre: ${this.name}, Edad: ${this.age}`);
  }

  showAge(){
     console.log(`Edad: ${this.age}`);
  }
}

const person1 = new People('Jean', 30);
const person2 = new People('Yv', 33);

console.log(person1.name);
console.log(person1.age);

person1.showInfo();
person2.showInfo();

person1.showAge();
person2.showAge();