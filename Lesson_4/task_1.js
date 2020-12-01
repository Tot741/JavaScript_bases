/*
1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

function numberToObject(number) {
    let numberObject = {};
    if (number > 999) {
        console.log('Введенное число превышает максимально допустимое - 999');
        return numberObject;
    }
    else {
        numberObject = { 'еденицы': (number % 10), 'десятки': (Math.floor((number % 100) / 10)), 'сотни': Math.floor(number / 100) };
        return numberObject;
    }
}

console.log(numberToObject(245));
console.log(numberToObject(99));
console.log(numberToObject(3));
console.log(numberToObject(1000));