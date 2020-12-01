/*
2. Продолжить работу с интернет-магазином:
a. В прошлом домашнем задании вы реализовали корзину на базе массивов. 
b. Какими объектами можно заменить их элементы? Реализуйте такие объекты.
c. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

//ну я корзину и так реализовал в прошлом задание объектами, так что остается только функционал перенести в ООП

let basket = [];
Array.prototype.count = function () {
    var result = 0;
    for (var i = 0; i < this.length; i++)
        if (this[i] != undefined)
            result++;
    return result;
}
function Goods(name, quantity, unit, cost) {
    this.name = name;
    this.quantity = quantity;
    this.unit = unit;
    this.cost = cost;
    this.total = quantity * cost;
    return { 'name': this.name, 'quantity': this.quantity, 'unit': this.unit, 'cost': this.cost, 'total': this.total }
}

function countBasketPrice(basket) {
    let sum = 0;
    for (let i = 0; i < basket.count(); i++) {
        sum = sum + (basket[i].total)
    };
    return sum;
}

basket.push(new Goods('Помидор', 1, 'кг', 100));
basket.push(new Goods('Огурец', 2, 'кг', 90));
basket.push(new Goods('Редис', 1.5, 'кг', 75));
console.log(basket);
console.log('Стоимость корзины - ' + countBasketPrice(basket));
