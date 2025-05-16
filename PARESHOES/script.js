document.addEventListener("DOMContentLoaded", () => {
  const contenitore = document.getElementById("prodotti");

  fetch("dati.json")
    .then(response => response.json())
    .then(prodotti => {
      prodotti.forEach(prodotto => {
        const div = document.createElement("div");
        div.className = "prodotto";

        div.innerHTML = `
          <h2>${prodotto.nome}</h2>
          <img src="${prodotto.immagine}" alt="${prodotto.nome}" />
          <p>${prodotto.descrizione}</p>
          <p><strong>${prodotto.prezzo}</strong></p>
          <button class="carrello">Aggiungi al carrello</button>
        `;

        div.querySelector(".carrello").addEventListener("click", () => {
          let carrello = JSON.parse(localStorage.getItem("carrello")) || [];
          carrello.push(prodotto);
          localStorage.setItem("carrello", JSON.stringify(carrello));
          alert("Prodotto aggiunto al carrello!");
        });

        contenitore.appendChild(div);
      });
    })
    .catch(error => console.error("Errore nel caricamento JSON:", error));
});

