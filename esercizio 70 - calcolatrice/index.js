"use strict"
let _Num, _Oper, _Reset, _Exe, _txt;
let n1, oper;

window.onload = function inizializza()
{
    _Num = document.getElementsByName("btnNum");
    _Oper = document.getElementsByName("btnOperatore");
    _Reset = document.getElementById("btnReset");
    _Exe = document.getElementById("btnRis");
    _txt = document.getElementById("txtDisplay");
    _Exe.disabled = true;
    _txt.value = "";
}

function Numero(num)
{
    _txt.value += num;
}

function Operatore(op)
{
    oper = op;
    if(_txt.value != "")
        n1 = parseFloat(_txt.value);
    else
        n1 = 0;
    _txt.value = "";
    for (let i = 0; i < _Oper.length; i++)
        _Oper[i].disabled = true;
    _Exe.disabled = false;
}

function resetta()
{
    n1 = undefined;
    oper = undefined;
    _txt.value = "";
    for (let i = 0; i < _Oper.length; i++)
        _Oper[i].disabled = false;
    _Exe.disabled = true;
}

function calcola()
{
    let n2;
    if(_txt.value != "")
        n2 = parseFloat(_txt.value);
    else
        n2 = 0;
    let ris;
    switch (oper)
    {
        case "+":
            ris = n1 + n2;
            break;
        case "-":
            ris = n1 - n2;
            break;
        case "*":
            ris = n1 * n2;
            break;
        case "/":
            if(n2 != 0)
                ris = n1 / n2;
            else
            {
                alert("Impossibile dividere per 0");
                resetta();
                ris = "";
            }
            break;
    }
    _txt.value = ris;
    for (let i = 0; i < _Oper.length; i++)
        _Oper[i].disabled = false;
    _Exe.disabled = true;
}

function GeneraNumero(min, max)
{
    return Math.floor((max - min + 1 ) * Math.random() + min);
}