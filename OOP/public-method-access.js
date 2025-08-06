// Ejemplo 1: Propiedad privada accedida mediante método público
class User {
  #password; // propiedad privada

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  // Método público que permite acceder a la propiedad privada
  getPassword() {
    return `Password: ${this.#password}`;
  }
}

const user = new User('Yv', '1212sf');
console.log(user.username); // Acceso directo permitido
//console.log(user.#password); // Esto lanza un error fuera del closure
console.log(user.getPassword()); // Accede a la propiedad privada mediante método público

// Ventajas:
// La propiedad #password no puede ser accedida directamente desde fuera de la clase.

// El método getPassword() permite controlar cómo se expone esa información (podrías formatearla o agregar validaciones antes de mostrarla).

// Desventajas:
// Si expones la propiedad privada mediante un método público, pierdes parte del propósito del encapsulamiento, ya que sigues permitiendo que se acceda desde fuera, aunque indirectamente.

// Si no hay necesidad real de exponerla, es mejor evitarlo.
