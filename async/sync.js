function fn1() {
   console.log("Function 1 ends");
};

function fn2() {
   console.log("Function 2 starts, it will take a while");
   for (let i = 0; i < 2000000000; i++) {
   }
   console.log("Function 2 ends");
};

function fn3() {
   console.log("Function 3 ends");
};

fn1();
fn2();
fn3();
