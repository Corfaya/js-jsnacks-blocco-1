# Snack 3
- Dichiaro una costante con un prompt come valore in cui chiedo all'utente di inserire 4 cifre
- Con il metodo split(""), divido le cifre inserite salvando il risultante array in una variabile
- SE la lunghezza dell'array è diversa da 4
    Stampo su console "Il numero inserito non rispetta le condizioni"
  ALTRIMENTI
    Dichiaro una variabile per la somma, inizializzandola a 0
    Ciclo ogni cifra inserita fino alla lunghezza dell'array risultante dallo split()
        Dichiaro una variabile per trasformare lo i singoli caratteri in numeri
        Per ogni iterazione, aggiungo il valore di ogni numero alla somma
    Stampo il risultato sulla console