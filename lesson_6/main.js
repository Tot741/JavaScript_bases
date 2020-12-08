/*
Продолжаем реализовывать модуль корзины:
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.
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

function createBasket() {
    if (basket_page.lastElementChild.id == "basket_table")
        basket_page.removeChild(basket_page.lastElementChild);
    var basketTable = document.createElement("table");
    basketTable.id = "basket_table";
    if (basket.length == 0) {
        basketTable.innerHTML = "<tr><th>В корзине пусто</th></tr>";
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
}


var buttons = document.getElementsByTagName("button");
console.log(buttons)
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        goodsName = e.target.id;
        switch (goodsName) {
            case "cucumb":
                basket.push(new Goods('Огурец', 1, 'кг', 90));
                console.log(basket_page.lastElementChild);
                createBasket();
                break;
            case "tomato":
                basket.push(new Goods('Помидор', 1, 'кг', 100));
                createBasket();
                break;
            case "redis":
                basket.push(new Goods('Редис', 1, 'кг', 75));
                createBasket();
                break;
            default:
                createBasket();
        }

    });
}
createBasket();
