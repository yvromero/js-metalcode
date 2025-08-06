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
}

const margarita1 = new Margarita("20ml", "48ml", "10ml");
console.log(margarita1.tequila);

margarita1.prepare();
console.log(`Total de bebidas preparadas: ${Margarita.count}`);

// this.propiedad	=> Propiedad de instancia (única para cada objeto)	=>objeto.propiedad
// static propiedad => Propiedad compartida por toda la clase =>	Clase.propiedad