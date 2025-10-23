const timer = setInterval((name, country) => {
  console.log(`Hola ${name} de ${country}`);
}, 2000, "Jean", "Uruguay");

setTimeout((t) => {
  clearInterval(t);
  console.log("Se ha detenido el intervalo");
}, 10000, timer);