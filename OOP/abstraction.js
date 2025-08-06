// Clase Names: guarda nombres separados por un carácter personalizado
class Names {
  // Propiedades privadas (encapsuladas)
  #separator;
  #names = "";
  #count = 0;

  // Constructor: inicializa el separador (abstracción)
  constructor(separator = ", ") {
    this.#separator = separator;
  }

  // Método público para agregar nombres (interfaz visible)
  add(name) {
    if (this.#names) {
      this.#names += this.#separator;
    }
    this.#names += name;
    this.#count++;
  }

  // Getter para obtener la lista de nombres
  get content() {
    return this.#names;
  }

  // Getter para obtener la cantidad de nombres agregados
  get count() {
    return this.#count;
  }
}

// Uso del objeto Names
const names = new Names("|");
names.add("Kynne");
names.add("Jean");
names.add("Min");

console.log(names.content); // Kynne|Jean|Min
console.log(names.count);   // 3

// El encapsulamiento protege los datos. La abstracción muestra solo lo necesario.
// Ambos trabajan juntos para que el código sea más seguro, limpio y fácil de usar.

// Ejemplo practico
class Pedido {
  #items = []; // Encapsulado: no se puede acceder directamente desde fuera
  #total = 0;

  constructor(cliente) {
    this.cliente = cliente;
    console.log(`🧾 Nuevo pedido para ${cliente}`);
  }

  agregarItem(nombre, precio) {
    this.#items.push({ nombre, precio });
    this.#total += precio;
    console.log(`✅ Se agregó ${nombre} por $${precio}`);
  }

  quitarItem(nombre) {
    const index = this.#items.findIndex(item => item.nombre === nombre);
    if (index !== -1) {
      this.#total -= this.#items[index].precio;
      this.#items.splice(index, 1);
      console.log(`❌ Se quitó ${nombre}`);
    } else {
      console.log(`⚠️ ${nombre} no está en el pedido`);
    }
  }

  verResumen() {
    console.log(`📋 Resumen del pedido de ${this.cliente}:`);
    this.#items.forEach((item, i) => {
      console.log(`${i + 1}. ${item.nombre} - $${item.precio}`);
    });
    console.log(`💵 Total: $${this.#total}`);
  }
}


const pedido1 = new Pedido("Yvonne");

pedido1.agregarItem("Hamburguesa", 30);
pedido1.agregarItem("Papas Fritas", 15);
pedido1.quitarItem("Ensalada"); // No existe
pedido1.agregarItem("Bebida", 10);

pedido1.verResumen();

// pedido1.#items; // Esto dará error: #items está encapsulado