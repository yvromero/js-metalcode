const sale = {
   id: 1,
   amount: 100,
   customer: {
      name: 'Ana'
   }
};

/*
---------------------------------------
SHALLOW COPY (copia superficial con spread)
---------------------------------------
- Copia las propiedades de primer nivel.
- Si hay objetos anidados, **solo se copia la referencia**,
  por lo que modificar el objeto interno afecta al original.
*/

// const saleCopy = {...sale};
// saleCopy.amount = 200;             // ✅ No afecta a `sale` porque es propiedad de primer nivel.
// saleCopy.customer.name = 'Peter';  // ❌ Sí afecta a `sale`, porque `customer` sigue siendo el mismo objeto en memoria.
// console.log(sale);                 // { id: 1, amount: 100, customer: { name: 'Peter' } }
// console.log(saleCopy);
// console.log(sale === saleCopy);         // false → Son objetos distintos.
// console.log(sale.customer === saleCopy.customer); // true → Comparten el mismo objeto interno.

/*
---------------------------------------
DEEP COPY (copia profunda con structuredClone)
---------------------------------------
- Crea una copia completa del objeto, incluyendo los objetos anidados.
- No comparte referencias internas → cambios en la copia no afectan al original.
*/

const saleDeepCopy = structuredClone(sale);
saleDeepCopy.amount = 300;           // ✅ No afecta al original.
saleDeepCopy.customer.name = 'Yv';   // ✅ Tampoco afecta al original porque `customer` es un nuevo objeto.
console.log(sale);
console.log(saleDeepCopy);
console.log(sale === saleDeepCopy);             // false → Son objetos distintos.
console.log(sale.customer === saleDeepCopy.customer); // false → También son distintos objetos internos.
