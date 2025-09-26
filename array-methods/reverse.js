// reverse()
// Reverses the order of the elements of an array in place.
// The first element becomes the last, and the last element becomes the first.
// Mutable 
const numbers = [1, 2, 3, 4, 5];

// reverse original array (mutates it)
numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1]

// join elements with "|" as separator
console.log(numbers.join('|'));  // "5|4|3|2|1"

// copy array before reversing (keeps original safe)
const reverseNumbers = [...numbers].reverse();
console.log(reverseNumbers); // [1, 2, 3, 4, 5]

// string example
const name = 'Yvonne';
console.log(name.split('')); // string => array

// split string -> reverse array -> join back to string
const reverseName = name.split('').reverse().join('');
console.log(reverseName); // "ennovY"

