#ESERCIZIO 29
##Gioco del 15
Realizzare in Java Script il gioco del 15 basato su 16 celle realizzate con 16 tag di tipo DIV creati
dinamicamente ed appesi ad un apposito wrapper. Ogni cella ha dimensione 35 x 35, margine 2px, padding 0
e colore di sfondo grigio chiaro.

All’avvio
L’applicazione cre le 16 celle, le appende ad un wrapper preesistente, ed occupa 15 delle 16 celle con dei
numeri casauli compresi tra 1 a 15 non ripetuti, lasciando una sola cella libera, indifferentemente al fondo
oppure in posizione casuale. Ogni cella ha sfondo blu e colore di primo piano bianco.
In corrispondenza del click
su una delle celle numerate, l’applicazione controlla se una delle 4 celle adiacenti è libera nel qual caso
“sposta” la pedina nella cella adiacente. Se tutte le celle adiacenti sono occupate non succede nulla.
Scopo del gioco è quello di ordinare i 15 numeri in ordine crescente dall’1 al 15
Nel momento in cui l’utente ha completato l’ordinamento viene visaulizzato un messaggio del tipo “Hai
Vinto” disabilitando al click tutte le pedine.
Nota:
Se l’ordinamento viene completato con alla fine 13 - 15 – 14 invece che 13 – 14 – 15, la disposizione delle
celle è tale da non consentire alcuna possibilità di vincita