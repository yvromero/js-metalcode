// Set con constructor
// Se usa dentro del constructor para inicializar las propiedades con lógica personalizada (como validación)
class Product {
  #price;

  constructor(initialPrice) {
    this.price = initialPrice; // Usa el set
  }

  get price() {
    return `$ ${this.#price}`;
  }

  set price(value) {
    this.#price = value < 0 ? 0 : value;
  }
}

const product = new Product(-10); // Llama al set, asigna 0
console.log(product.price); // "$ 0"


// Set sin Constructor 
// La propiedad puede ser asignada después de crear la instancia.
// Se usa el setter para validar el nuevo valor.

class Product {
  #price = 0; // Valor inicial por defecto

  get price() {
    return `$ ${this.#price}`;
  }

  set price(value) {
    this.#price = value < 0 ? 0 : value;
  }
}

const product1 = new Product(); // No pasa valor inicial
product1.price = 25;            // Esto usa el set
console.log(product1.price);    // "$ 25"

// Inicializar la propiedad #price
// Si no vas a usar constructor y tenga un valor por defecto.
// Si querés evitar que quede undefined