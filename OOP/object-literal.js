const people = {
   name: 'Yv',
   age: 33,
   showInfo: function(){
      console.log(`Nombre: ${this.name}, Age: ${this.age}`);
   }
}

console.log(people.name);
people.showInfo();