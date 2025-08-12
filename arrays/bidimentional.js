const arrays = [
   ['suomi 1', 'maths 1', 'AI 1'],
   ['suomi 2', 'maths 2', 'AI 2'],
   ['suomi 3', 'maths 3', 'AI 3'],
];

/*console.log(arrays[2][2]);*/
arrays[0].push('history 1');
arrays[0].unshift('english 1');
console.log(arrays);


let level = 1;

for(array of arrays){
   for(element of array){
      console.log(`Level: ${level}: ${element}`);
   }
   level ++;
}