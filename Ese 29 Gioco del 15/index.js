"use strict"

const DIM = 4;

window.onload = function inizializza()
{
    let _wrapper = document.getElementById("wrapper");
    let vet = [];

    for (let i = 0; i < 15; i++)
        vet[i] = i + 1;

    for (let i = 0; i < DIM; i++)
    {
        for (let j = 0; j < DIM; j++)
        {
            let _div = document.createElement("div");
            _div.id = "btm-" + i + "-" + j;
            _div.innerHTML = "";
            _div.addEventListener("click", Sposta);
            _wrapper.appendChild(_div);

            if (vet.length != 0)
            {
                let n = GeneraNumero(0, vet.length - 1);
                _div .innerHTML = vet[n].toString();
                vet.splice(n, 1);
                _div.style.backgroundColor = "blue";
            }
        }
    }

    //elenco funzioni

    function Sposta()
    {
        let id = this.id.split('-');
        let row = parseInt(id[1]), col = parseInt(id[2]);
        if (col > 0)
        {
            let _div2 = document.getElementById("btm-" + row + "-" + (col - 1));
            if (_div2.innerHTML == "")
                swap(this, _div2);
        }
        if (col < DIM - 1)
        {
            let _div2 = document.getElementById("btm-" + row + "-" + (col + 1));
            if (_div2.innerHTML == "")
                swap(this, _div2);
        }
        if (row > 0)
        {
            let _div2 = document.getElementById("btm-" + (row - 1) + "-" + col);
            if (_div2.innerHTML == "")
                swap(this, _div2);
        }
        if (row < DIM - 1)
        {
            let _div2 = document.getElementById("btm-" + (row + 1) + "-" + col);
            if (_div2.innerHTML == "")
                swap(this, _div2);
        }
    }

    function swap(_div1, _div2)
    {
        let aus = _div1.innerHTML;
        _div1.innerHTML = _div2.innerHTML;
        _div2.innerHTML = aus;

        aus = _div1.style.backgroundColor;
        _div1.style.backgroundColor = _div2.style.backgroundColor;
        _div2.style.backgroundColor = aus;

        let ok = true, f = false; cont = 1;
        let i = 0, j;

        if (document.getElementById("btm-" + 3 + "-" + 0).innerHTML == 13 && document.getElementById("btm-" + 3 + "-" + 1).innerHTML == 15 && document.getElementById("btm-" + 3 + "-" + 2).innerHTML == 14 && document.getElementById("btm-" + 3 + "-" + 3).innerHTML == "")
        {
            ok = false;
            f = true;
        }

        while (ok && i < DIM)
        {
            j = 0;
            while (ok && j < DIM)
            {
                if (document.getElementById("btm-" + i + "-" + j).innerHTML != cont)
                    ok = false;
                else
                {
                    j++;
                    cont++;
                }
            }
            i++;
        }

        if (ok)
            alert("hai vinto");
        else if (f)
            alert("non è possibile vincere");
    }
}
function GeneraNumero(min, max)
{
    return Math.floor((max - min + 1 ) * Math.random() + min);
}