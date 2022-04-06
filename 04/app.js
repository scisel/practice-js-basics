function createArray(min, max) {
    let arr = [];
    for (let i = 0; i < 20; i++) {
        let randomNumber = Math.round((Math.random() * (max - min)) + min);
        arr.push(randomNumber)
    }
    return arr
}

function sort(putArrayHere) {
    putArrayHere.sort(function (a, b) {
        return b - a
    });

    let slicedArray = putArrayHere.slice(0, 10);
    return slicedArray
}

function arith(sortedArrayHere) {
    const sum = sortedArrayHere.reduce((a, b) => a + b);
    const arithAfterSum = sum / sortedArrayHere.length
    return arithAfterSum
}

const arr = createArray(1, 100);
console.log(arr);
const sortedArray = sort(arr);
console.log(sortedArray);
console.log(arith(sortedArray));

console.log('--------------')

const newArr = createArray(1, 200);
console.log(newArr)
const sortedNewArr = sort(newArr);
console.log(sortedNewArr)
const newArith = arith(sortedNewArr)
console.log(newArith)