//!scope mezclaod con fucniones

//*IIFE
//?Una expresion funconal que se invoca inmediatamente 
/* (function () {
    let color = 'green';

    function printColor() {
        console.log(color);
    }

    printColor();
})(); */

//*funciones que regresan funciones
/* function makeColorPrinter(color) {
    let colorMessage = `The color is ${color}`;

    return function () {
        console.log(colorMessage);
    }
}

let greenColorPrinter = makeColorPrinter("blue");

console.log(greenColorPrinter()); */

//*variables privadas
/* const counter = {
    count: 3,
};
console.log(counter.count); */

function makeCounter(n) {
    let count = n;

    return {
        increase: function () { count = count + 1; },
        drecrease: function () { count = count - 1 },
        getCount: function () { return count; },
    }
}

let counter = makeCounter(7);
console.log('the count is: ' + counter.getCount());
counter.increase();
console.log('the count is: ' + counter.getCount());
counter.drecrease();
counter.drecrease();
counter.drecrease();
counter.drecrease();
console.log('the count is: ' + counter.getCount());

