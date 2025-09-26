const people = [
  { name: 'Carlos', age: 42 },
  { name: 'Ana', age: 21 },
  { name: 'Maria', age: 13 },
  { name: 'Luis', age: 12 },
];

const namePeopleIsOver18 = people.filter(person => person.age > 18)
  .map(person =>  person.name)
  .join(', ');

console.log(`Names: ${namePeopleIsOver18}`);


const sumaAgePeopleUnder40 = people.filter(person => person.age < 40)
  .reduce((acc, person) => acc + person.age, 0);

console.log(`Age sum: ${sumaAgePeopleUnder40}`);

namePeopleIsOver18.split(', ').forEach(name => {
 console.log(`Hi ${name}`);
})
