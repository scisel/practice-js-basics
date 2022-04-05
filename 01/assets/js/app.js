const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a, typeof b);

const getNumberA = Number(a)
const getNumberB = Number(b)

let sum = Number(getNumberA + getNumberB);
console.log(sum);

let sub = Number(getNumberA - getNumberB);
console.log(sub);

let mul = Number(getNumberA * getNumberB);
console.log(mul);

let div = Number(getNumberA / getNumberB)
console.log(div);


const arr = [];
arr.push(sum, sub, mul, div);
console.log(arr);

arr.forEach(check => {
    if (check > 20) {
        console.log(`${check} jest większe od 20`)
    } else
        console.log(`${check} jest mniejsze od 20`)
})