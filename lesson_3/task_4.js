/*
5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/

let pyr = 'x';
// for (var i = 0; i > 20; i++) { // странно, если делаю цикл for, то console.log ничего не выводит в цикле
let i = 0;
while (i < 20) {
    console.log(pyr);
    pyr = pyr + 'x';
    i++;
}
