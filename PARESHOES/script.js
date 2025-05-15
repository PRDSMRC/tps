// Attende che la pagina HTML sia completamente caricata
document.addEventListener("DOMContentLoaded", () => {
  // Seleziona l'elemento HTML con id "prodotti" dove verranno mostrati i prodotti
  const contenitore = document.getElementById("prodotti");

  // Carica il file dati.json contenente i prodotti
  fetch("dati.json")
    .then(response => response.json()) // Converte la risposta in formato JSON
    .then(prodotti => {
      // Per ogni prodotto trovato nel file JSON
      prodotti.forEach(prodotto => {
        // Crea un nuovo elemento <div> per il prodotto
        const div = document.createElement("div");
        div.className = "prodotto"; // Aggiunge una classe CSS

        // Inserisce all'interno del <div> il contenuto HTML del prodotto
        div.innerHTML = `
          <h2>${prodotto.nome}</h2>
          <img src="${prodotto.immagine}" alt="${prodotto.nome}" />
          <p>${prodotto.descrizione}</p>
          <p><strong>${prodotto.prezzo}</strong></p>
          <button class="carrello">Aggiungi al carrello</button>
        `;

        // Bottone per aggiungere al carrello
        div.querySelector(".carrello").addEventListener("click", () => {
          let carrello = JSON.parse(localStorage.getItem("carrello")) || [];
          carrello.push(prodotto);
          localStorage.setItem("carrello", JSON.stringify(carrello));
          alert("Prodotto aggiunto al carrello!");
        });

        // Aggiunge il nuovo <div> al contenitore principale sulla pagina
        contenitore.appendChild(div);
      });
    })
    .catch(error => console.error("Errore nel caricamento JSON:", error)); // Gestisce errori nel caricamento
});
