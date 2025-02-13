let stringa;
let righe = [];
let tabella = [];
let datiNumerici = [];
const canvas = document.getElementById("grafico");
const grafico = canvas.getContext("2d");

function leggi(input) {
    if (input.files.length === 0) {
        alert("Seleziona un file valido.");
        return;
    }

    let file = input.files[0];
    let reader = new FileReader();

    reader.readAsText(file);
    
    reader.onload = function () {
        stringa = reader.result;
        inserisci();  // Chiama la funzione per elaborare i dati
    };
}

function inserisci() {
    document.getElementById("titolo").innerHTML = "Informazioni del file";
    let tab = document.getElementById("tabella");
    
    righe = stringa.split("\n");
    tab.innerHTML = ""; // Svuota la tabella prima di riempirla con nuovi dati

    for (let n = 0; n < righe.length; n++) {
        tabella[n] = righe[n].split(",");
        let nuovaRiga = tab.insertRow();

        for (let z = 0; z < tabella[n].length; z++) {
            let cella = nuovaRiga.insertCell(z);
            cella.innerHTML = tabella[n][z].replace(/"/g, ''); // Rimuove eventuali virgolette
        }
    } 

    // Array per contenere solo i valori numerici della seconda colonna
    datiNumerici = [];
    
    for (let z = 1; z < righe.length; z++) {
        let valore = Number(tabella[z][1].replace(/"/g, ''));
        if (!isNaN(valore)) {
            datiNumerici.push(valore);  // Salva solo valori validi
        } 
    }

    disegna();  // Avvia il disegno del grafico
}

function disegna() {

    // Pulisce il canvas e disegna gli assi
    grafico.clearRect(0, 0, canvas.width, canvas.height);
    grafico.beginPath();
    grafico.moveTo(865, 580);  // Punto di partenza dell'asse X
    grafico.lineTo(30, 580);   // Disegna l'asse X orizzontale
    grafico.lineTo(30, 0);     // Disegna l'asse Y verticale
    grafico.stroke();

    grafico.font = "12px Arial";
    let xgrafico;
    let ygrafico;

    // Aggiunge etichette all'asse X, suddividendo lo spazio disponibile
    for (let x = 1; x < righe.length; x++) {
        xgrafico = ((840 / (righe.length - 1)) * x); 
        grafico.fillText(tabella[x][0].replace(/"/g, ' '), xgrafico-10, 595);
    }

    // Determina i valori massimo e minimo, arrotondandoli ai 1000 più vicini
    let indiceMax = Math.ceil(Math.max(...datiNumerici) / 1000) * 1000;
    let indiceMin = Math.floor(Math.min(...datiNumerici) / 1000) * 1000;
    let differenza = indiceMax - indiceMin;
    let scalaY = 560 / differenza; // Determina quanti pixel rappresentano un'unità di valore

    // Aggiunge le etichette all'asse Y, distanziandole in modo uniforme
    for (let i = 0; i <= 5; i++) { 
        let yPos = 580 - (scalaY * (i * differenza / 5));
        grafico.fillText(indiceMin + (i * differenza / 5), 0, yPos);
    }

    // Inizia a tracciare il grafico unendo i punti con una linea
    grafico.beginPath();
    for (let y = 0; y < righe.length - 1; y++) {
        xgrafico = ((840 / (righe.length - 1)) * (y+1));  
        ygrafico = 580 - (scalaY * (datiNumerici[y] - indiceMin)); // Scala i valori all'altezza corretta

        if (y === 0) {
            grafico.moveTo(xgrafico, ygrafico);  // Imposta il primo punto
        } else {
            grafico.lineTo(xgrafico, ygrafico);  // Collega i punti successivi
        }
    }

    grafico.stroke();  // Disegna la linea del grafico
}
