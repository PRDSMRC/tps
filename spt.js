let numero = 1
let elenco = []

function aggiungi() {
    let persona = {
        nome: document.getElementById("nome").value,
        cognome: document.getElementById("cognome").value,
        via: document.getElementById("via").value,
        paese: document.getElementById("paese").value,
        email: document.getElementById("mail").value
    }
    
    elenco.push(persona)
    localStorage.setItem("persona" + numero, JSON.stringify(persona))
    localStorage.setItem("totale", numero)

    document.getElementById("nome").value = ""
    document.getElementById("cognome").value = ""
    document.getElementById("via").value = ""
    document.getElementById("paese").value = ""
    document.getElementById("mail").value = ""

    numero++
}

function caricaTabella() {
    let totale = localStorage.getItem("totale")

    for (let i = 0; i < totale; i++) {
        let dati = localStorage.getItem("persona" + (i + 1))
        
        if (dati) {
            let persona = JSON.parse(dati)
            let riga = document.createElement("tr")
            let cellaNum = document.createElement("th")

            cellaNum.innerHTML = i + 1
            riga.appendChild(cellaNum)

            for (let valore of Object.values(persona)) {
                let cella = document.createElement("td")
                cella.innerHTML = valore
                riga.appendChild(cella)
            }

            document.getElementById("lista").appendChild(riga)
        }
    }
}

function svuotaDati() {
    localStorage.clear()
}