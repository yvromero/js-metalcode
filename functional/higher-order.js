function add(x, y, fn){
   const result = x + y;
   fn(result);
}

function showResult(result){
   console.log(`El resultado es ${result}`);
}

add(5, 10, showResult);