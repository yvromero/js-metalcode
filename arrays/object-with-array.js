class CoffeeTalk{
   #products;

   constructor(){
      this.#products = [];
   }

   addProducts(product){
      this.#products.push(product);
   }

   getProducts(){
      return this.#products;
   }
}

const productTalk = new CoffeeTalk();
productTalk.addProducts({ name: 'Matcha', price: 2.5 });
productTalk.addProducts({ name: 'Iced Americano', price: 2.0 });

const productsTalk = productTalk.getProducts();
for( product of productsTalk ){
 console.log(`Listado de CoffeeTalk: ${product.name}, Precio: ${product.price}`);
}
