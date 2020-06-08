"use strict"

const DIM = 10;

window.onload = function inizializza()
{
    let _body = document.getElementsByTagName("body")[0];
    let _table = document.createElement("table");
    _body.appendChild(_table);
    for (let i = 0; i < DIM; i++)
    {
        let _tr = document.createElement("tr");
        _table.style.margin = "0 auto";
        _table.appendChild(_tr);
        for (let j = 0; j < DIM; j++)
        {
            let _td = document.createElement("td");
            _tr.appendChild(_td);
            let _btm = document.createElement("button");
            _btm.classList.toggle("btnStyle", true);
            _btm.setAttribute("id", "btm-" + i + "-" + j);
            _btm.addEventListener("click", visualizza);
            _td.appendChild(_btm);
        }
    }

    function visualizza()
    {
        let str = this.getAttribute("id").split('-');
        let i = str[1], j = str[2];
        this.innerHTML = i + "-" + j;
        this.style.backgroundColor = "red";
        this.disabled = true;
    }
}
function GeneraNumero(min, max)
{
    return Math.floor((max - min + 1 ) * Math.random() + min);
}