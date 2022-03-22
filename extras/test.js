var x = 5;

function fn() {
    x = 10;
    y = 20;
};

fn();
console.log(x); // -> 10
console.log(y); // -> 20