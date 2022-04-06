const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

function getSum(a, b, c) {

    const arr = [];
    arr.push(parseInt(a), parseInt(b), parseInt(c))
    arr.sort(function (x, y) {
        return y - x
    })

    let sumTheLargest2 = arr[0] + arr[1]
    // console.log(arr)
    console.log(sumTheLargest2);
    return sumTheLargest2;
}

const isEven = function (a) {

    if (isNaN(a)) {
        return null
    }

    if (a % 2 === 0) {
        return true
    } else {
        return false
    }
}

const sum = getSum(a, b, c)
const evenCheck = isEven(sum);
// console.log(even)

function showInfo(a, b) {
    switch (b) {
        case null:
            console.log(`Podany argument ${a} nie jest liczbą`);
            break;
        case true:
            console.log(`Podany argument ${a} jest parzysty`);
            break;
        case false:
            console.log(`Podany argument ${a} jest nieparzysty`);
            break;
    }
}

showInfo(sum, evenCheck)

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}