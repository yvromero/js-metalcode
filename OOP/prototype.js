function Customer(name, balance){
   this.name = name;
   this.balance = balance;
}

// Métodos definidos fuera del constructor, en el prototype
Customer.prototype.getBalance = function(){
   return this.balance;
}

Customer.prototype.addBalance = function(amount){
   this.balance += amount;
}

Customer.prototype.substractBalance = function(amount){
   this.balance -= amount;
}

const a = new Customer("Yv", 1000);
const b = new Customer("Pedro", 2000);

console.log(a.getBalance === b.getBalance);


// En prototype (más eficiente)
//	Menos consumo de memoria | Mejor performance | todos los objetos comparten el metodo 