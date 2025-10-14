class Sale{
   #id;
   #total;

   constructor(id, total){
      this.#id = id;
      this.#total = total;
   }

   get total(){
     return this.#total;
   }

   set total(value){
    if(value < 0){
       throw new Error('Total cannot be negative');
    }
     this.#total = value;
   }
}

try {
  const sale = new Sale(1, 100);
  sale.total = 10;
} catch(error) {
  console.error('Error:', error.message);
} finally {
  console.log('Operation finished');
}