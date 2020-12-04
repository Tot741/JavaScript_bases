/*
Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
a. Пустая корзина должна выводить строку «Корзина пуста»;
b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/

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

var basketTable = document.createElement("table");
console.log(basket);
if (basket.length == 0) {
    basketTable.innerHTML = "<tr><th>Корзина пуста</th></tr>";
    basket_page.appendChild(basketTable);
}
else {
    var tableContent = "<tr><th>Наименование</th><th>Кол-во</th><th>Ед.изм.</th><th>Цена</th><th>Сумма</th></tr>";
    for (var i = 0; i < basket.count(); i++) {
        tableContent = tableContent + "<tr><td>" + basket[i].name + "</td><td>" + basket[i].quantity + "</td><td>" + basket[i].unit + "</td><td>" + basket[i].cost + "</td><td>" + basket[i].total + "</td></tr>"
    }
    tableContent = tableContent + "<tr><td colspan=\"4\" style=\"text-align:right\">В корзине " + basket.count() + " товара(ов) на сумму: </td><td>" + countBasketPrice(basket) + "</td></tr>"
    basketTable.innerHTML = tableContent;
    basket_page.appendChild(basketTable);
}