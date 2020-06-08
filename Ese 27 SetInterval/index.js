"use strict"
window.onload = function inizializza()
{
    let _wrapper = document.getElementById("wrapper");
    let _btmStop = document.getElementById("btmStop");
    let _btmRestart = document.getElementById("btmRestart");
    let wrapperW = parseInt(getComputedStyle(_wrapper).width);
    let wrapperH = parseInt(getComputedStyle(_wrapper).height);

    let timer = setInterval(GeneraOggetti, 100);
    _btmRestart.disabled = true;
    _btmStop.addEventListener("click", function () {
         clearInterval(timer);
         this.disabled = true;
        _btmRestart.disabled = false;
    });
    _btmRestart.addEventListener("click", function () {
        timer = setInterval(GeneraOggetti, 100);
        this.disabled = true;
        _btmStop.disabled = false;
    })

    function GeneraOggetti()
    {
        //crea un tag div in memoria non visibile nella pagina del dom
        let _div = document.createElement("div");

        //assegno width e height
        let w = GeneraNumero(1, 100);
        let h = GeneraNumero(1, 100);
        _div.style.width = w + "px";
        _div.style.height = h + "px";

        //assegno un colore di sfondo casuale
        let r = GeneraNumero(0, 255);
        let g = GeneraNumero(0, 255);
        let b = GeneraNumero(0, 255);
        _div.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";

        //assegno la posizione
        let x = GeneraNumero(0, wrapperW - w);
        let y = GeneraNumero(0, wrapperH - h);
        _div.style.position = "absolute";
        _div.style.left = x + "px";
        _div.style.top = y + "px";

        //appendo il div al wrapper
        _wrapper.appendChild(_div);
    }
}
function GeneraNumero(min, max)
{
    return Math.floor((max - min + 1 ) * Math.random() + min);
}