function verifyPassword(realPassword, maxRetries){
   let attemps = 0;

   return (password) => {

      if(attemps >= maxRetries){
         return "Locked";
      }else{
        attemps++;

        if(password === realPassword){
         attemps = 0;
         return "Access granted";
        }else{
          return `Incorrect credentials, remaining attempts: ${maxRetries - attempts}`;
        }
      }
   }
}

const verify = verifyPassword("123456", 3);
console.log(verify("123"));     // Incorrect credentials, remaining attempts: 2
console.log(verify("123"));     // Incorrect credentials, remaining attempts: 1
console.log(verify("123456"));  // Access granted (counter resets)
console.log(verify("123"));     // Incorrect credentials, remaining attempts: 2
console.log(verify("123"));     // Incorrect credentials, remaining attempts: 1
console.log(verify("123456"));  // Access granted (counter resets)

// verifyPassword es una función de orden superior que recibe:
// realPassword → la contraseña correcta
// maxRetries → el número máximo de intentos permitidos

// Dentro, se define una variable privada attempts que:
// Se incrementa cada vez que se ingresa un password incorrecto
// Se resetea a 0 si la contraseña es correcta
// Bloquea el acceso con "Locked" si se superan los intentos máximos

// Como devuelve otra función, esa función interna es un closure que recuerda la variable attempts entre llamadas.