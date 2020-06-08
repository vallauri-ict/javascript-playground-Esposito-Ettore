"use strict"

const DIM = 10;

window.onload = function inizializza()
{
    let _wrapper = document.getElementById("wrapper");
    let cen = 0;

    for (let i = 0; i < DIM; i++)
        for (let j = 0; j < DIM; j++)
        {
            let _div = document.createElement("div");
            _div.id = "div-" + i + "-" + j;
            _wrapper.appendChild(_div);
        }
    setInterval(Cornice, 500);

    function Cornice()
    {
        for (let i = 0; i < DIM; i++)
            for (let j = 0; j < DIM; j++)
            {
                let _div = document.getElementById("div-" + i + "-" + j);
                _div.style.backgroundColor = "#CCC";
            }

        for (let i = cen; i < DIM - cen; i++)
        {
            let _div = document.getElementById("div-" + i + "-" + cen);
            _div.style.backgroundColor = "red";
            _div = document.getElementById("div-" + i + "-" + (DIM - cen - 1).toString());
            _div.style.backgroundColor = "red";
        }
        for (let j = cen + 1; j < DIM - cen - 1; j++)
        {
            let _div = document.getElementById("div-" + cen + "-" + j);
            _div.style.backgroundColor = "red";
            _div = document.getElementById("div-" + (DIM - cen - 1) + "-" + j);
            _div.style.backgroundColor = "red";
        }

        if (cen < DIM / 2 - 1)
            cen++;
        else
            cen = 0;
    }
}
function GeneraNumero(min, max)
{
    return Math.floor((max - min + 1 ) * Math.random() + min);
}