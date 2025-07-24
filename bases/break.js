// CASO 1 – console.log(i) fuera del if

for (let i = 1; i < 10; i++) {
  if (i % 3 == 0) {
    break;
  }
  console.log(i); // Solo imprime si NO es múltiplo de 3
}

OBS: 
// El bucle imprime i mientras no sea múltiplo de 3.
// Al llegar a i = 3, entra al if, hace break y no imprime 3.

// CASO 2 – console.log(i) dentro del if
for (let i = 1; i < 10; i++) {
  if (i % 3 == 0) {
    console.log(i); // Solo imprime si es múltiplo de 3
    break;
  }
}

OBS:
// No imprime nada hasta que encuentra un múltiplo de 3.
// Cuando i = 3, entra al if, lo imprime, luego rompe el bucle.

// obs: Continue and break works with while and do-while 
// break: Termina todo el bucle inmediatamente

for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}
// Imprime: 1, 2 (se detiene completamente al llegar a 3)

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Imprime: 1, 2, 4, 5 (salta el 3)