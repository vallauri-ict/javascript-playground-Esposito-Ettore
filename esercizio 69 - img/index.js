"use strict"

let _sltImg, _imgBox, _imgRoll, _optImg;

window.onload = function inizializza()
{
    _sltImg = document.getElementById("lstImmagini");
    _imgBox = document.getElementById("imgBox");
    _imgRoll = document.getElementById("imgRoll");
    _optImg = document.getElementsByName("opt");
    _imgBox.style.backgroundImage = 'url("img/img1.jpg")';
    _imgRoll.style.backgroundImage = 'url("img/img1.jpg")';
    _optImg[0].checked = true;
    for (let i = 0; i < _optImg.length; i++)
        _optImg[i].addEventListener("click", function () { cambiaImmagine(this.value) });
}

function cambiaImmagine(num)
{
    _imgBox.style.backgroundImage = 'url("img/img' + num + '.jpg")';
    _optImg[num - 1].checked = true;
    _sltImg.selectedIndex = num - 1;
}

function roll_on()
{
    _imgRoll.style.backgroundImage = 'url("img/img' + GeneraNumero(2, 4) + '.jpg")';
}

function roll_off()
{
    _imgRoll.style.backgroundImage = 'url("img/img1.jpg")';
}

function GeneraNumero(min, max)
{
    return Math.floor((max - min + 1 ) * Math.random() + min);
}