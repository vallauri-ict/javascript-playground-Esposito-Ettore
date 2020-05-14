"use strict"

let matr = [
               ["0", "1", "2", "3", "4", "5"],
               ["6", "7", "8", "9", "A", "B"],
               ["C", "D", "E", "F", "G", "H"],
               ["I", "J", "K", "L", "M", "N"],
               ["O", "P", "Q", "R", "S", "T"],
               ["U", "V", "W", "X", "Y", "Z"]
           ];
let secr = [
               [0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0]
           ];

window.onload = function inizializza()
{
    let _txtUser = document.getElementById("txtUser");
    let _txtPwd = document.getElementById("txtPwd");
    let _captcha = document.getElementsByClassName("captcha");
    let _txtCaptcha = document.getElementById("txtCaptcha");
    let _imgOk = document.getElementById("imgOk");
    let _btmCaptcha = document.getElementById("btnCaptcha");
    let _btmGenera = document.getElementById("btnGenera");
    let _btmInvia = document.getElementById("btnInvia");

    _txtUser.addEventListener("change", function() { ControllaNome() });
    _txtPwd.addEventListener("change", function() { ControllaPassword() });
    _btmGenera.addEventListener("click", function() { GeneraCaptcha() });
    _btmCaptcha.addEventListener("click", function() { ControllaCaptcha() });
    _btmInvia.addEventListener("click", function() { Invia() });

    _txtUser.ok = false;
    _txtPwd.ok = false;
    _txtCaptcha.ok = false;
    _imgOk.src = none;
    GeneraCaptcha();

    //elenco funzioni
    function ControllaNome()
    {
        let name = _txtUser.value;
        if (name.length < 8)
        {
            alert("Il nome deve essere lungo almeno 8 caratteri");
            _txtUser.style.borderColor = "Red";
            _txtUser.ok = false;
        }
        else
        {
            _txtUser.style.borderColor = "";
            _txtUser.ok = true;
        }
    }

    function ControllaPassword()
    {
        let pwd = _txtPwd.value;
        if (pwd.length < 8)
        {
            alert("La password deve essere lunga almeno 8 caratteri");
            _txtPwd.style.borderColor = "Red";
            _txtPwd.ok = false;
        }
        else
        {
            _txtPwd.ok = true;
            if (pwd.search(/[0-9]/) == -1)
                _txtPwd.ok = false;
            else if (pwd.search(/[a-z]/) == -1)
                _txtPwd.ok = false;
            else if (pwd.search(/[A-Z]/) == -1)
                _txtPwd.ok = false;
            _txtPwd.style.borderColor = _txtPwd.ok ? "" : "Red";
            if (!_txtPwd.ok)
                alert("La password deve contenere almeno un carattere maiuscolo, uno minuscolo e un numero");
        }
    }

    function GeneraCaptcha()
    {
        let x, y;
        for (let i = 0; i < 5; i++)
        {
            x = GeneraNumero(0, 5);
            y = GeneraNumero(0, 5);
            secr[0][i] = y;
            secr[1][i] = x;
            _captcha[i].style.backgroundPosition = (-50 * x) + "px " + (-50 * y) + "px";
        }
        console.log(secr);
        _imgOk.src = none;
        _txtCaptcha.ok = false;
        _txtCaptcha.value = "";
    }

    function ControllaCaptcha()
    {
        let cap = _txtCaptcha.value;
        if (cap.length == 5)
        {
            let ok = true;
            for (let i = 0; (i < 5) && (ok) ; i++)
            {
                let ch1 = cap[i].toUpperCase(), ch2 = matr[secr[0][i]][secr[1][i]];
                if (ch1 != ch2)
                    ok = false;
            }
            _txtCaptcha.ok = ok;
            _imgOk.src = ok ? "img/ok.png" : "img/nok.png";
        }
        else
        {
            _imgOk.src = "img/nok.png";
            _txtCaptcha.ok = false;
        }
    }

    function Invia()
    {
        if (_txtCaptcha.ok && _txtUser.ok && _txtPwd.ok)
            alert("ok");
        else
            alert("nok");
    }
}

function GeneraNumero(min, max)
{
    return Math.floor((max - min + 1 ) * Math.random() + min);
}