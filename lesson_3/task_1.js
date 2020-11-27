/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/
let simpleNumbers = []
let i = 2;
while (i < 100) {
    let j = 2;
    let flag = true;
    while (j < i) {
        if (i % j == 0) {
            flag = false;
            break;
        }
        j++;
    }
    if (flag) {
        simpleNumbers.push(i);
    }
    i++;
}

console.log(simpleNumbers)
