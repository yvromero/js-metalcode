const beers = [
  {
    name: 'Pale Ale',
    type: 'Ale',
    alcohol: 5.5,
    brewery: 'Brewery A',
    country: 'USA',
    bitterness: 40 // IBU
  },
  {
    name: 'Stout Imperial',
    type: 'Stout',
    alcohol: 8.2,
    brewery: 'Brewery B',
    country: 'Ireland',
    bitterness: 50
  },
  {
    name: 'Pilsner',
    type: 'Lager',
    alcohol: 4.8,
    brewery: 'Brewery C',
    country: 'Germany',
    bitterness: 30
  },
  {
    name: 'IPA Tropical',
    type: 'IPA',
    alcohol: 6.5,
    brewery: 'Brewery D',
    country: 'Australia',
    bitterness: 55
  }
];

// console.log(beers);
console.log(beers[1].name);

for(b of beers){
   console.log(`Disponibles: ${b.name}, Alcohol: ${b.alcohol}`);
}
