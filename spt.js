let i = 0;
let tabella = [];

function salvaDati() {
    const dati = {
        nome: document.getElementById("nome").value,
        cognome: document.getElementById("cognome").value,
        citta: document.getElementById("citta").value,
        indirizzo: document.getElementById("indirizzo").value,
        mail: document.getElementById("mail").value
    };

    tabella.push(dati);
    localStorage.setItem("tabella", JSON.stringify(tabella));

    document.getElementById("nome").value = "";
    document.getElementById("cognome").value = "";
    document.getElementById("citta").value = "";
    document.getElementById("indirizzo").value = "";
    document.getElementById("mail").value = "";

    inserisciDati();
}

function inserisciDati() {
    let tab = document.getElementById("tabella");
    tab.innerHTML = "";  
    let t = JSON.parse(localStorage.getItem("tabella"));

    for (let z = 0; z < t.length; z++) {
        let utente = t[z];

        let nuovaRiga = tab.insertRow();
        let contatore = nuovaRiga.insertCell(0);
        contatore.innerHTML = z + 1;

        let nome = nuovaRiga.insertCell(1);
        nome.innerHTML = utente.nome;
        
        let cognome = nuovaRiga.insertCell(2);
        cognome.innerHTML = utente.cognome;

        let citta = nuovaRiga.insertCell(3);
        citta.innerHTML = utente.citta;

        let indirizzo = nuovaRiga.insertCell(4);
        indirizzo.innerHTML = utente.indirizzo;

        let mail = nuovaRiga.insertCell(5);
        mail.innerHTML = utente.mail;
    }
}