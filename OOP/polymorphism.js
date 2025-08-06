class Animal {
  speak() {
    return "Hace un sonido";
  }
}

class Perro extends Animal {
  speak() {
    return "Guau";
  }
}

class Gato extends Animal {
  speak() {
    return "Miau";
  }
}

function hacerHablar(animal) {
  console.log(animal.speak());
}

const perro = new Perro();
const gato = new Gato();
const generico = new Animal();

hacerHablar(perro);    // Guau
hacerHablar(gato);     // Miau
hacerHablar(generico); // Hace un sonido

// Una función actúa de forma polimórfica cuando puede operar sobre diferentes tipos de objetos (o clases) que comparten una interfaz común (como una clase padre o una interfaz en sí).
// Si querés tener una abstracción común con validaciones, manejo de errores, o lógica compartida.

// const animales = [new Perro(), new Gato()];

//animales.forEach(animal => animal.speak());
// Si cada clase implementa su propio speak() y no necesitás lógica adicional 

/////////////////////////////////////////////////////////////////////

class Notifier{
   send(message){
      console.log(`Mensaje en consola: ${message}`);
   }
}

class Email extends Notifier{
   send(message){
      console.log(`Enviando email: ${message}`);
   }
}

class SMS extends Notifier{
   send(message){
     console.log(`Enviando sms: ${message}`);
   }
}

class Push extends Notifier{
   send(message){
     console.log(`Enviando push: ${message}`);
   }
}

function notify(notifier, message){
    notifier.send(message);
}

const emailNotifier = new Email();
const smsNotitifier = new SMS();
const pushNotifier = new Push();
notify(smsNotitifier, 'Hi, soy un mensaje del tipo sms')