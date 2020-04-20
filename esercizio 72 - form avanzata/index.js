"use strict"

let _txtNome, _optSesso, _sltAteneo, _txtCap, _chkLav, _txtDescr;

window.onload = function inizializza()
{
    _txtNome = document.getElementById("nominativo");
    _optSesso = document.getElementsByName("sesso");
    _sltAteneo = document.getElementById("ateneo");
    _txtCap = document.getElementById("cap");
    _chkLav = document.getElementById("lavoratore");
    _txtDescr = document.getElementById("descr");
}

function ValidaForm()
{
    let nome = _txtNome.value, output = "";
    let i = 0;

    while ((i < nome.length) && (isNaN(nome[i++])));
    if (!isNaN(nome[i - 1]))
    {
        _txtNome.classList.toggle("redBorder", true);
        output += "\n - Il nome coniene dei numeri";
    }
    else
    {
        _txtNome.classList.toggle("redBorder", false);
        if(nome.length == 0)
        {
            _txtNome.classList.toggle("redBorder", true);
            output += "\n - Il nome non è presente";
        }
        else
            _txtNome.classList.toggle("redBorder", false);
    }

    let cap = _txtCap.value;
    i = 0;
    while ((i < cap.length) && (!isNaN(cap[i++])));
    if (isNaN(cap[i - 1]))
    {
        _txtCap.classList.toggle("redBorder", true);
        output += "Il cap contiene dei caratteri non accettati";
    }
    else
    {
        _txtCap.classList.toggle("redBorder", false);
        if(cap.length != 5)
        {
            _txtCap.classList.toggle("redBorder", true);
            output += "La lunghezza non è di 5 numeri";
        }
        else
            _txtCap.classList.toggle("redBorder", false);
    }


    if ((!_optSesso[0].checked) && (!_optSesso[1].checked))
        output += "\n - Il sesso non è presente";


    if (_sltAteneo.value == "nessuno")
    {
        output += "\n - L'ateneo non è presente";
        _sltAteneo.classList.toggle("redBorder", true);
    }
    else
        _sltAteneo.classList.toggle("redBorder", false);


    if ((_chkLav.checked) && (_txtDescr.value == ""))
    {
        output += "\n - Serve fare una descrizione del lavoro";
        _txtDescr.classList.toggle("redBorder", true);
    }
    else
        _txtDescr.classList.toggle("redBorder", false);


    if (output == "")
    {
        alert("Registrazione avvenuta con successo");
        return true;
    }
    else
    {
        alert("Sono presenti i seguenti errori: " + output);
        return false;
    }
}

function Cap()
{
    let cap = _txtCap.value;
    let i = 0;
    while ((i < cap.length) && (!isNaN(cap[i++])));
    if (isNaN(cap[i - 1]))
    {
        _txtCap.classList.toggle("redBorder", true);
        alert("Il cap contiene dei caratteri non accettati");
    }
    else
    {
        _txtCap.classList.toggle("redBorder", false);
        if(cap.length != 5)
        {
            _txtCap.classList.toggle("redBorder", true);
            alert("La lunghezza non è di 5 numeri");
        }
        else
            _txtCap.classList.toggle("redBorder", false);
    }
}

function Nome()
{
    let nome = _txtNome.value;
    let i = 0;
    while ((i < nome.length) && (isNaN(nome[i++])));
    if (!isNaN(nome[i - 1]))
    {
        _txtNome.classList.toggle("redBorder", true);
        alert("Il nome coniene dei numeri");
    }
    else
    {
        _txtNome.classList.toggle("redBorder", false);
        if(nome.length == 0)
        {
            _txtNome.classList.toggle("redBorder", true);
            alert("Il nome non è presente");
        }
        else
            _txtNome.classList.toggle("redBorder", false);
    }
}

function Desc()
{
    if (_chkLav.checked)
        _txtDescr.disabled = false;
    else
        _txtDescr.disabled = true;
}

function GeneraNumero(min, max)
{
    return Math.floor((max - min + 1 ) * Math.random() + min);
}