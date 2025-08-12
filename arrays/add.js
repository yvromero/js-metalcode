const frutas = ['manzana', 'banana', 'pera'];
frutas.push('naranja');       // al final
frutas.unshift('sandía');     // al principio
console.log(frutas);



let verduras = ['espinaca', 'acelga', 'pepino'];

const addVerduras = verdura => {
   if (verduras.length % 2 === 0) {
      verduras.push(verdura);
      console.log(`Add al final: ${verdura}`);
   } else {
      verduras.unshift(verdura);
      console.log(`Add al inicio: ${verdura}`);
   }
};

addVerduras('zanahoria');
addVerduras('perejil');
addVerduras('zapallo');
console.log(`Lista actualizada: ${verduras}`);


let especias = ['sal', 'pimienta', 'nuez moscada'];

const cargarEspecias = especia => especias.length % 2 === 0
  ? (especias.push(especia), console.log(`Nueva especia agregada al final: ${especia}`))
  : (especias.unshift(especia), console.log(`Nueva especia agregada al inicio: ${especia}`));

cargarEspecias('clavo de olor');
cargarEspecias('ajo deshidratado');
cargarEspecias('cayena');

console.log(`Lista final de especias: ${especias.join(', ')}`);