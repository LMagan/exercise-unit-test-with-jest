// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
function fromDollarToYen(dollars) {
    return (dollars / oneEuroIs["USD"]) * oneEuroIs["JPY"];
}
console.log(fromDollarToYen(3));


function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}
console.log(fromEuroToDollar(3));


function fromYenToPound(yen) {
    return (yen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
} 
console.log(fromYenToPound(200));
module.exports ={fromYenToPound , fromDollarToYen,fromEuroToDollar, sum}