class Product{
   #price = 0;

   get price(){
      return `$ ${this.#price}`;
   }

   set price(value){
      this.#price = value < 0 
      ? 0 
      : value;
   }
}

const product = new Product();
product.price = 10;
console.log(product.price);


// class Product {
//   #price;

//   constructor(initialPrice) {
//     this.price = initialPrice; // No hace nada útil
//   }

//   get price() {
//     return `$ ${this.#price}`;
//   }
// }

// const p = new Product(10);
// console.log(p.price); // "$ undefined"

// class Product {
//   #price;

//   constructor(initialPrice) {
//     this.#price = initialPrice; // acceso directo a la propiedad privada
//   }

//   get price() {
//     return `$ ${this.#price}`;
//   }
// }

// const p = new Product(10);
// console.log(p.price); // "$ 10"

