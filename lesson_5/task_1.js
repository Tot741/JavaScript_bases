/*
Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. Доска должна быть верно разлинована на черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.
*/

function chessBoard() {
    var newTable = document.createElement("table")
    newTable.innerHTML = "<tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th></tr><tr><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>2</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>3</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>4</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>5</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>6</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>7</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>8</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
    body.appendChild(newTable);
    var cell = document.getElementsByTagName("td");
    for (var i = 0; i < cell.length; i++) {
        cell[i].style.width = "60px";
        cell[i].style.height = "60px";
        cell[i].style.textAlign = "right";
        cell[i].style.fontWeight = "bold";
        if (i % 9 != 0) {
            cell[i].style.border = "1px solid black";
            if (i % 2 != 0)
                cell[i].style.background = "black";
        }
    }

}
chessBoard()