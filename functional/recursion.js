const names = ['Pedro', 'Ana', 'Juan', 'Hector', 'Guillermo'];

function showArray(arr, index = 0){
   if(index >= arr.length){
     return;
   }
   console.log(arr[index]);
   showArray(arr, index + 1);
}

(showArray(names));