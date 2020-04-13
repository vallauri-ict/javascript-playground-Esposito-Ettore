"use strict"

let _txtCognome, _txtNome, _txtMatricola, _sltRegione, _txtEmail, _txtTelefono;

window.onload = function inizializza()
{
    _txtCognome = document.getElementById("Cong");
    _txtNome = document.getElementById("Nom");
    _txtMatricola = document.getElementById("Matr");
    _sltRegione = document.getElementById("Reg");
    _txtEmail = document.getElementById("Email");
    _txtTelefono = document.getElementById("Tel");
}

function ValidaForm()
{
    let output = "";
    if (_txtCognome.value == "")
    {
        _txtCognome.classList.toggle("redBorder", true);
        output += "<\n - Cognome non presente";
    }
    else
        _txtCognome.classList.toggle("redBorder", false);
    if (_txtNome.value == "")
    {
        _txtNome.classList.toggle("redBorder", true);
        output += "\n - Nome non presente";
    }
    else
        _txtNome.classList.toggle("redBorder", false);
    if (isNaN(parseInt(_txtMatricola.value)))
    {
        _txtMatricola.classList.toggle("redBorder", true);
        output += "\n - Matricola assente o sono presenti valori non numerici";
    }
    else
        _txtMatricola.classList.toggle("redBorder", false);
    if (_sltRegione.selectedIndex == 0)
    {
        _sltRegione.classList.toggle("redBorder", true);
        output += "\n - Regione non presente";
    }
    else
        _sltRegione.classList.toggle("redBorder", false);
    if ((_txtEmail.value == "") && (isNaN(parseInt(_txtTelefono.value))))
    {
        _txtEmail.classList.toggle("redBorder", true);
        _txtTelefono.classList.toggle("redBorder", true);
        output += "\n - Mettere una mail o un telefono validi";
    }
    else
    {
        _txtEmail.classList.toggle("redBorder", false);
        _txtTelefono.classList.toggle("redBorder", false);
    }
    if (output == "")
    {
        alert("Registrazione avvenuta con successo");
        return true;
    }
    else
    {
        alert("Sono presenti i seguenti errori:" + output);
        return false;
    }
}

function GeneraNumero(min, max)
{
    return Math.floor((max - min + 1 ) * Math.random() + min);
}