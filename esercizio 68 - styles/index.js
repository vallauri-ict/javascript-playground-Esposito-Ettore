"use strict"
let _div, _txtDim, _img;

window.onload = function inizializza()
{
    let Body;
    _div = document.getElementById("titolo");
    _txtDim = document.getElementById("txtSize");
    _img = document.getElementById("imgBox");
    document.body.style.backgroundRepeat = "repeat-y";
    document.body.style.backgroundPosition = "center";
    _div.style.backgroundColor = "blue";
    _div.style.color = "yellow";
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "dodgerblue";
    _div.style.borderStyle = "solid";
}

function Inverti()
{
    _div.style.backgroundColor = _div.style.backgroundColor == "blue" ? "yellow" : "blue";
    _div.style.color = _div.style.color == "yellow" ? "blue" : "yellow";
}

function Dimensione()
{
    let Dim = parseInt(_txtDim.value);
    if(Dim > 0)
        _div.style.fontSize = Dim + "pt";
    else
        alert("Inserire un numero maggiore di 0");
}

function CabiaSfondo()
{
    document.body.style.backgroundImage = document.body.style.backgroundImage == "none" ? "url(\"img/bg.gif\")" : "none";
    document.body.style.backgroundColor = document.body.style.backgroundColor == "dodgerblue" ? "#eaeaea" : "dodgerblue";
}

function CambiaBordo()
{
    _div.style.borderStyle = _div.style.borderStyle == "solid" ? "hidden" : "solid";
}

function img(num)
{
    if(num != 0)
        _img.setAttribute("src", "img/img" + num + ".jpg");
    else
        _img.removeAttribute("src");
}

function GeneraNumero(min, max)
{
    return Math.floor((max - min + 1 ) * Math.random() + min);
}