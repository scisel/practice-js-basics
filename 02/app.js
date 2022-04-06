
/* rozwiązanie z pętlą for */
// const x = parseInt(prompt('Podaj liczbę od 1 do 9!'));

// if (x > 0 && x < 10) {

// for (let i = 1; i < 10; i++) {
//     console.log(x * i)
// }
// } else {
//     alert('Nie wpisałeś właściwej liczby')
// }


/* rozwiązanie z pętlą while  */

const x = parseInt(prompt('Podaj podstawę potęgowania'));
const y = parseInt(prompt('Podaj wykładnik'));

let exponentiation = function (base, index) {
    let counter = 0;
    let result = 1;
    let steps = ''
    while (counter < index) {
        result = result * base
        counter++
        if (counter < index) {
            steps = steps + `${String(base)} * ` 
        }
        else steps = steps + base
    }
    steps = steps + ' = ' + result
    console.log(steps)
    return result
}

console.log(exponentiation(x, y))
