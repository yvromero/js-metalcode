const ageVerification = minAdult => minMayorAdult => age => {
   if(age <= minAdult) {
      return "Is a child"
   } else if (age >= minMayorAdult) {
      return "Is a senior"
   }
   return "Id an adult";
}

console.log(ageVerification(18)(65)(15)); // "Is a child"
console.log(ageVerification(18)(65)(20)); // "Adult"
console.log(ageVerification(18)(65)(70)); // "Is an mayor"

const description = ageVerification(18)(65);

console.log(description(15));
console.log(description(70));
console.log(description(28));