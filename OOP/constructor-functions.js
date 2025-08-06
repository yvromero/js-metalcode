function Customer(name, balance){
   this.name = name;
   this.balance = balance;

   this.getBalance = function(){
      return this.balance;
   }

   this.addBalance = function(amount){
      this.balance += amount;
   }

   this.substractBalance = function(amount){
      this.balance -= amount;
   }
}

const customer1 = new Customer("Yv", 1000);

customer1.addBalance(200);
customer1.substractBalance(300);

console.log(customer1.getBalance());

