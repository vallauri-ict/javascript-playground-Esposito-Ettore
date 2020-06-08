"use strict"
window.onload = function inizializza()
{
    let _wrapper = document.getElementById("wrapper");
    let vet = [];
    let j = 1;
    let first = true, _oldBtm;
    for (let i = 0; i < 36; i++)
    {
        vet[i] = j;
        if (i % 2 != 0)
            j++;
    }

    for (let i = 0; i < 6; i++)
    {
        for (j = 0; j < 6; j++)
        {
            let _btm = document.createElement("button");

            _btm.id = "btm-" + i + "-" + j;
            _btm.classList.toggle("btm", true);
            _btm.addEventListener("click", Visualizza);
            let rnd = GeneraNumero(0, vet.length - 1);
            _btm.innerHTML = vet[rnd].toString();
            vet.splice(rnd, 1);
            _wrapper.appendChild(_btm);
        }
    }

    function Visualizza()
    {
        let id = this.id.split('-');
        let row = id[1], col = id[2];
        if (first)
        {
            _oldBtm = this;
            this.style.backgroundColor = "red";
            this.disabled = true;
        }
        else
        {
            this.style.backgroundColor = "red";
            for (let i = 0; i < 6; i++)
                for (let j = 0; j < 6; j++)
                {
                    let _btm = document.getElementById("btm-" + i + "-" + j);
                    _btm.disabled = true;
                }
            let _newBtm = this;
            setTimeout(function () { Controlla(_oldBtm, _newBtm) }, 500);
        }
        first = !first;
    }

    function Controlla(_oldBtm, _newBtm)
    {
        if (_oldBtm.innerHTML == _newBtm.innerHTML)
        {
            _oldBtm.style.backgroundColor = "blue";
            _newBtm.style.backgroundColor = "blue";
        }
        else
        {
            _oldBtm.style.backgroundColor = "rgb(127, 127, 127)";
            _newBtm.style.backgroundColor = "rgb(127, 127, 127)";
        }
        let ok = true;
        for (let i = 0; i < 6; i++)
            for (let j = 0; j < 6; j++)
            {
                let _btm = document.getElementById("btm-" + i + "-" + j);
                if(_btm.style.backgroundColor != "blue")
                {
                    _btm.disabled = false;
                    ok = false;
                }
            }
        if (ok)
            alert("Hai vinto");
    }
}
function GeneraNumero(min, max)
{
    return Math.floor((max - min + 1 ) * Math.random() + min);
}