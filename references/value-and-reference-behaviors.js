// 1. Primitivo: pasa por valor, reasignar NO cambia afuera
function cambiaNum(num) {
  num = 10;             // reasignación local
}

let x = 5;
cambiaNum(x);
console.log(x);         // 5 (no cambió)

// 2. Objeto: pasa por referencia, mutar SÍ cambia afuera
function cambiaProp(obj) {
  obj.name = "Nuevo";   // mutación del objeto original
}

let persona = { name: "Ana" };
cambiaProp(persona);
console.log(persona.name);  // "Nuevo"

// 3. Objeto: reasignar NO cambia afuera
function reasignaObj(obj) {
  obj = { name: "Otro" };  // solo cambia la referencia local
}

let persona1 = { name: "Ana" };
reasignaObj(persona1);
console.log(persona1.name); // "Ana" (no cambió)

// 4. Array: pasa por referencia, mutar SÍ cambia afuera

function agregaElem(arr) {
  arr.push(1);           // muta el array original
}

let nums = [0];
agregaElem(nums);
console.log(nums);       // [0, 1]

// 5. Array: reasignar NO cambia afuera

function reasignaArr(arr) {
  arr = [9, 9];          // solo cambia referencia local
}

let nums1 = [0];
reasignaArr(nums1);
console.log(nums1);       // [0]