const beer = {
   name: 'IPA',
   type: 'Ale',
   alcohol: 5.5,
   price: 4
};

function getInfo({name, type, ...beer}){
      console.log(beer);
      return `The beer ${name} is the type ${type}`;
};

console.log(getInfo(beer));
console.log(beer);