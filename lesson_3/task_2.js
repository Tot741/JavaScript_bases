/*
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/
// решил сделать массив объектов, где каждый товар - объект
let basket = [{ name: 'помидор', quantity: 1, unit: 'кг', cost: 100 }, { name: 'огурец', quantity: 2, unit: 'кг', cost: 90 }, { name: 'редис', quantity: 1.5, unit: 'кг', cost: 75 }];
/*
У меня basket.lenght возращает undefined, для подсчета  длины массива нашел такой вариант:
*/
Array.prototype.count = function () {
    var result = 0;
    for (var i = 0; i < this.length; i++)
        if (this[i] != undefined)
            result++;
    return result;
}
// Собственно сама функция подсчета стоимости корзины
function countBasketPrice(basket) {
    let sum = 0;
    for (let i = 0; i < basket.count(); i++) {
        //console.log(basket[i].quantity);
        //console.log(basket[i].cost);
        sum = sum + (basket[i].quantity * basket[i].cost)
    };
    return sum;
}
console.log(countBasketPrice(basket));