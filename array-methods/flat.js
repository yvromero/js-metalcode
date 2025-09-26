// flat
// By default, flattens nested arrays one level deep (from level 2 to level 1)


const numbers = [1, 2, 3, [2, 3], 2, 4, [3, 5, [234, 567,[753, 463, [2, 1]]], 23, 1]];

const numbersFlat = numbers.flat(3);

console.log(numbersFlat);