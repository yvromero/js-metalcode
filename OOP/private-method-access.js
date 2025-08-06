// Ejemplo 2: Propiedad y método privados accedidos solo desde dentro
class User {
  #password; // propiedad privada

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  // Método público
  getInfo() {
    return `Username: ${this.username} ${this.#getPassword()}`;
  }

  // Método privado
  #getPassword() {
    return `Password: ${this.#password}`;
  }
}

const user = new User('Yv', '1212sf');
console.log(user.username); // Acceso directo permitido
// console.log(user.#password); // Esto lanza un error fuera del closure
// console.log(user.#getPassword()); // Esto lanza un error fuera del closure
console.log(user.getInfo()); // Internamente accede al método privado que a su vez accede a la propiedad privada
