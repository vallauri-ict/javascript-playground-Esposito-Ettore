#ESERCIZIO 25
##Captcha
Qusta è la simulazione di un accesso a un sito, le tre textbox servono rispettivamente:
 - Il nome: allla modifica controlla se il nome inserito è lungo almeno 8 caratteri, altrimenti colora il bordo di rosso
   e non permette di inviare i dati al server
 - La pasword: alla modifica controlla se la password inserita è lunga almeno 8 caratteri e se contriene almeno un
   carattere minuscolo, uno maiuscolo e un numero, altrimenti colora il bordo di rosso e non permette di inviare i dati al server
 - Il captcha: serve scrivere il codice visualizzato nelle immagini superiori, alla pressione del bottone "Non sono un robot",
   controlla se il codice inserito è esatto, se lo è allora mette una spunta affianco al bottone, altrimenti mette una corce e 
   non permette di inviare i dati al server
   
I bottoni servono rispettivamente:
 - "Genera un altro captcha": genera un nuovo codice e pulisce la textbox captcha e l'immagine
 - "Invia": Simula un invio dei dati al server solo nel caso che nome, password e captcha rispettino i criteri sopracitati
 