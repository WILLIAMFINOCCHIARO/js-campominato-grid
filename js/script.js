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


// Esercizio di oggi: Carosello Multi Array
// nome repo: js-array-carousel
// Consegna: Dati tre array contenenti:
// una lista ordinata di 5 immagini,
// una lista ordinata dei relativi 5 luoghi e
// una lista di 5 news, creare un carosello come nella foto allegata.
// MILESTONE 1 Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// MILESTONE 2 Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3 Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi:
// titolo e
// testo. Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre.
// BONUS: Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.
// Prima di partire a scrivere codice: Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
// Consigli del giorno:
// costruiamo del carosello una versione statica contenente un'immagine grande con del testo ben posizionato e una miniatura. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
// scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
// Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"
// Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:

document.getElementById('play').addEventListener('click', function(){
  play();
});

function play() {
  document.querySelector('.container-square').innerHTML = '';

  const levelSelected = parseInt(document.getElementById('level').value);
  // console.log(levelSelected);

  let cellsNumber, cellForSide;
  const bombsNumber = 16;  

  switch(levelSelected){
      case 1:
          cellsNumber = 100;
          // cellForSide = 10;
          // oppure
          // cellForSide = 10;
          // cellsNumber = cellForSide * cellForSide;
          // // cellForSide = 10;          
          break;
      case 2: 
          cellsNumber = 81;
          break;
      case 3: 
          cellsNumber = 49;
  }


  const bombs = generateBoms();
  console.log(bombs);

  function generateBoms() {
      const arrayBombs = [];

      while(arrayBombs.length < bombsNumber){
          const numeroRandom = getRndInteger(1,cellsNumber);
          if(!arrayBombs.includes(numeroRandom)) {
              arrayBombs.push(numeroRandom);
          }
      }
      
      return arrayBombs;

  }

  function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }


  cellForSide = Math.sqrt(cellsNumber);
  // console.log(cellForSide);

  generatePlayground();

  function generatePlayground() {

      
      const box = document.querySelector('.container-square');

      for(let i = 1; i<= cellsNumber; i++){
          const grid = createItem(i);

          grid.addEventListener('click', function() {
              this.classList.add('selected');
          });

          // console.log(grid);
          box.appendChild(grid);
      }
      // console.log(size);        
  }

  function createItem(num) {
      const cell = document.createElement('div');
      cell.classList.add('square');
      const size = `calc(100% / ${cellForSide})`;
      cell.style.width = size;
      cell.style.height = size;

      cell.innerHTML = num;

      return cell;

  }



  //soluzione che porta dopo ad un ragionamento più complesso
  // function generatePlayground() {
  //     const size = `calc(100% / ${cellForSide})`;
  //     // console.log(size);
  
  //     let items = "";
  //     for(let i = 1; i <= cellsNumber; i++){ 
  //         const item = `
  //         <div class="square" style="width:${size};height:${size}">${i}</div>`;
  //         console.log(item);
  //         items += item;
  //     }
      
  //     console.log(items);
  
  //     const box = document.querySelector('.container-square');
  //     box.innerHTML = items;
  // }
  

  

}