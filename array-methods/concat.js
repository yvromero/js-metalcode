const products1 = ["agua", "leche", "huevo", "pan", "queso"];
const products2 = ["carne", "pescado", "fruta", "verdura", "cereal"];
const products3 = ["chocolate", "galleta", "cereal", "caramelo", "chicle"];

const products2and3= products2.concat(products3);
//console.log(products2and3);

const product1and2and3 = products2and3.concat(products1);
//console.log(product1and2and3);

const allProducts = [].concat("brownie", products1, products3, "vinagre");
console.log(allProducts);