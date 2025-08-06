class People{
   constructor(name, age){
      this.name = name;
      this.age = age;
   }

   get info() {
      return `${this.name} is ${this.age} years old`
   }
}

class Student extends People{
   constructor(name, age, course){
      super(name, age);
      this.course = course;
   }

   showCourse(){
      return `The available course is ${this.course}`;
   }

   get info() {
      return `${super.info} and studies ${this.course}`;
   }
}

const people = new People('Yv', 33);
console.log(people.info);


const student = new Student('Avi', 22, 'JS');
console.log(student.showCourse());
console.log(student.info); 
