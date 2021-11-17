// Consegna L'utente indica un livello di difficoltà 
//in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// Consigli del giorno: :party_wizard: ****Scriviamo prima cosa vogliamo fare passo passo in italiano,
// dividiamo il lavoro in micro problemi. Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.


// metto tutto all'interno di una funzione
function GridCento(params) {
// metto tutto all'interno di un ciclo
for (let i = 1; i <= 100; i++) {
  // Creo gli elementi attraverso createElement
  const elementSquare = document.createElement("div");
  // Seleziono il container
  const container = document.querySelector(".container");
  // Aggiungo la classe Square
  elementSquare.className ="square";
  // Appendo al container
  container.append(elementSquare);
  console.log(elementSquare);
  }

};

// metto tutto all'interno di una funzione
function GridOttanta(params) {
  // metto tutto all'interno di un ciclo
  for (let i = 1; i <= 81; i++) {
    // Creo gli elementi attraverso createElement
    const elementSquare = document.createElement("div");
    // Seleziono il container
    const container = document.querySelector(".container");
    // Aggiungo la classe Square
    elementSquare.className ="square";
    // Appendo al container
    container.append(elementSquare);
    console.log(elementSquare);
    }
  
  };

  // metto tutto all'interno di una funzione
function GridQuaranta(params) {
  // metto tutto all'interno di un ciclo
  for (let i = 1; i <= 49; i++) {
    // Creo gli elementi attraverso createElement
    const elementSquare = document.createElement("div");
    // Seleziono il container
    const container = document.querySelector(".container");
    // Aggiungo la classe Square
    elementSquare.className ="square";
    // Appendo al container
    container.append(elementSquare);
    console.log(elementSquare);
    }
  
  };



// selezionare il comando select 
let selectComandEasy = document.getElementById("facile");
let selectComandMedium = document.getElementById("medio");
let selectComandHard = document.getElementById("difficile");

// aggiungere il comando click
selectComandEasy.addEventListener("click",GridCento);
selectComandMedium.addEventListener("click",GridOttanta);
selectComandHard.addEventListener("click",GridQuaranta);


