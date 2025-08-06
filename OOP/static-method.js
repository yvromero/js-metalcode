class Margarita {
  static count = 0;

  constructor(tequila, tripleSec, limeJuice){
     this.tequila = tequila;
     this.tripleSec = tripleSec;
     this.limeJuice = limeJuice;
  }
    prepare() {
     console.log(`Add ${this.tequila} de tequila, con ${this.tripleSec} de triple sec, y ${this.limeJuice} de limon`);
     Margarita.count++;
  }

  static prepareClassic() { // Se llama directamente desde la clase Margarita, no desde una instancia
     const classicMargarita = new Margarita("50ml", "20ml", "10ml");
     classicMargarita.prepare(); // Usa el método de instancia
     console.log("Bebida clasica preparada!");
  }
}

const margarita1 = new Margarita("20ml", "48ml", "10ml");
console.log(margarita1.tequila);

margarita1.prepare(); prepare() // método de instancia, que además incrementa el contador estático.
console.log(`Total de bebidas preparadas: ${Margarita.count}`);

Margarita.prepareClassic(); 
console.log(`Total de bebidas preparadas: ${Margarita.count}`);

//Un método estático es una función definida dentro de una clase que no necesita una instancia (objeto) para ser utilizada. 
//Se llama directamente desde la clase.