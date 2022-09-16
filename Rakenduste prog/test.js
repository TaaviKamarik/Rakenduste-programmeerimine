console.log('hi')

function sayHi(){
    return 'hello'
}

const arrowFunction = () => {
    return 'hello from arrow function'
}

console.log(arrowFunction())

const shortArrowFunction = () => 'hello from short arrow function'

console.log(shortArrowFunction())

//Kirjutage  3 funktsiooni tüüpi 2 + b ja returnib summa

function sum(a,b){
    return a+b
}

const arrowSum = (a,b) => {
    return a + b
}

const shortArrowSum = (a,b) => a+b


console.log(sum(2,3))
console.log(arrowSum(2,3))
console.log(shortArrowSum(2,3))

const summa = a => b => a+b
console.log(summa(3)(3))


function sumA(a){
    return function sisesumma(b){
        return a + b
    };
}

console.log(sumA(3)(4))