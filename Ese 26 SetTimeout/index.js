"use strict"
window.onload = function inizializza()
{
    let _imgCarta = document.getElementById("imgCarta");
    let _btmGioca = document.getElementById("btnGioca");
    let _lblPunti = document.getElementById("lblSomma");
    let _lblCarte = document.getElementById("lblCarte");
    let _lblRis = document.getElementById("lblRisultato");
    let Uscite = [];

    _lblRis.style.visibility = "hidden";
    _btmGioca.addEventListener("click", function () { Gioca() } );

    //elelnco funzioni
    function Gioca()
    {
        if (!_btmGioca.disabled)
        {
            Uscite = [];
            _btmGioca.disabled = true;
            _lblPunti.innerHTML = "0";
            _lblRis.style.visibility = "hidden";
        }
        let rnd
        do
        {
            rnd = GeneraNumero(1, 10);
        }
        while (Uscite.includes(rnd));
        Uscite.push(rnd);
        _imgCarta.src = "img/bg_d" + rnd + ".gif";

        if (rnd > 7)
            rnd = 0.5;
        _lblPunti.innerHTML = (parseFloat(_lblPunti.innerHTML) + rnd).toString();
        _lblCarte.innerHTML = Uscite.length.toString();
        if (Uscite.length < 3)
            setTimeout(Gioca, 1500);
        else
        {
            _lblRis.style.visibility = "visible";
            _btmGioca.disabled = false;
            if (parseInt(_lblPunti.innerHTML) <= 7.5)
                _lblRis.innerHTML = "HAI VINTO";
            else
                _lblRis.innerHTML = "HAI PERSO";
        }
    }
}
function GeneraNumero(min, max)
{
    return Math.floor((max - min + 1) * Math.random() + min);
}