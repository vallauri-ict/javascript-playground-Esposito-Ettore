"use strict"
let _body, _wrapper, _chkBig, _rngContr, _testi1, _testi2, _testi3, _testi4, _testi5;
let Contr = 0.3, Big = false;
window.onload = function inizializza()
{
    if (document.cookie == "")
    {
        document.cookie = "opt-0-0.3";
    }
    else
    {
        let vet = document.cookie.split('-');
        if(vet[1] == 0)
            Big = false;
        else
            Big = true;
        Contr = vet[2];
    }
    console.log(document.cookie);
    _body = document.getElementsByTagName("body")[0];
    _wrapper = document.getElementsByClassName("wrapper")[0];
    _chkBig = document.getElementById("chkGrande");
    _rngContr = document.getElementById("rngContrasto");
    _testi1 = document.getElementsByTagName("p");
    _testi2 = document.getElementsByClassName("desc");
    _testi3 = document.getElementsByTagName("h1");
    _testi4 = document.getElementsByTagName("h3");
    _testi5 = document.getElementsByTagName("h4");

    _wrapper.style.height = window.innerHeight + "px";
    _chkBig.checked = Big;
    _rngContr.value = Contr;
    _wrapper.style.backgroundColor = "rgba(0,0,0," + Contr + ")";
    CambiaDimensioni();

    _chkBig.addEventListener("change", CambiaDimensioni);
    _rngContr.addEventListener("change", function () {
        _wrapper.style.backgroundColor = "rgba(0,0,0," + _rngContr.value + ")";
        CambiaCookie();
        Contr = _rngContr.value;
    })
}

function CambiaDimensioni()
{
    if (_chkBig.checked)
    {
        for (let i = 0; i < _testi1.length; i++)
            _testi1[i].style.fontSize = "2em";
        for (let i = 0; i < _testi2.length; i++)
            _testi2[i].style.fontSize = "1.6em";
        for (let i = 0; i < _testi3.length; i++)
            _testi3[i].style.fontSize = "5.3em";
        for (let i = 0; i < _testi4.length; i++)
            _testi4[i].style.fontSize = "3.3em";
        for (let i = 0; i < _testi5.length; i++)
            _testi5[i].style.fontSize = "2.8em";
    }
    else
    {
        for (let i = 0; i < _testi1.length; i++)
            _testi1[i].style.fontSize = "1.7em";
        for (let i = 0; i < _testi2.length; i++)
            _testi2[i].style.fontSize = "1.3em";
        for (let i = 0; i < _testi3.length; i++)
            _testi3[i].style.fontSize = "5em";
        for (let i = 0; i < _testi4.length; i++)
            _testi4[i].style.fontSize = "3em";
        for (let i = 0; i < _testi5.length; i++)
            _testi5[i].style.fontSize = "2.5em";
    }
    CambiaCookie();
    Big = _chkBig.checked;
}

function CambiaCookie()
{
    let old = document.cookie;
    document.cookie = old + "; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    if (_chkBig.checked)
        document.cookie = "opt-" + 1 + "-" + _rngContr.value;
    else
        document.cookie = "opt-" + 0 + "-" + _rngContr.value;
}

window.onresize = function resizeFrame()
{
    _wrapper.style.height = window.innerHeight + "px";
}