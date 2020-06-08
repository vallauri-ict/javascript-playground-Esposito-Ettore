#ESERCIZIO 26
##SetTimeOut
Realizzare il gioco 7 ½ basato sulla pagina HTML allegata.
Il gioco consiste nel visualizzare, in sequenza ogni 1000 ms, 3 carte casuali fra le dieci del mazzo,
sommando il valore di ciascuna carta visualizzata. Se la carta visualizzata è una figura nel punteggio viene
aggiunto soltanto ½ punto, altrimenti viene aggiunto il valore della carta.
L’utente deve clickare una sola volta sul pulsante gioca, che viene disabilitato e che avvia il gioco nel
seguente modo:
- Genera un numero compreso tra 1 e 10 sempre diverso in corrispondenza di ogni carta
- Visualizza nel contenitore denominato imgCarta l’immagine della carta corrispondente
- Aggiorna il punteggio sommando il valore della carta visualizzata.
Aggiorna la label denominata lblPunteggio con il punteggio fin’ora totalizzato
- Avvia un timer che, dopo 1 secondo provveda a richiamare nuovamente la funzione gioca( ) che
visualizzerà una seconda carta e così via per la terza carta
Il sistema deve visualizzare complessivamente 3 carte.
Se nell’ambito delle 3 carte il giocatore NON sfora il 7 ½ vince la partita, altrimenti perde.