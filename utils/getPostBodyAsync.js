/*
    * Fonction asynchrone qui permet de récupérer le corps d'une requête POST
Quand un client envoie une requête POST à ton API avec du JSON dans le corps, ce code : 
1️⃣ Récupère les morceaux de données envoyées.
2️⃣ Assemble ces morceaux pour reformer le JSON complet.
3️⃣ Parse les données JSON en objet JavaScript utilisable.
4️⃣ Renvoie ces données sous forme de promesse.b
*/

const getPostBodyAsync = (req) => {
    return new Promise((resolve, reject) => {
      let body = ""; // On initialise une variable pour stocker les données reçues
  
      // 1 On écoute l'événement "data" qui est émis lorsque le client envoie des données
      req.on("data", (chunk) => {
        body += chunk; // On ajoute chaque morceau (chunk) de données au body
      });
  
      // 2 On écoute l'événement "end" qui signifie que toutes les données ont été reçues
      req.on("end", () => {
        try {
          // 3️ On essaie de parser les données en JSON
          body = body ? JSON.parse(body) : {}; // Si body est vide, on renvoie un objet vide {}
  
          resolve(body); // On résout la promesse avec les données parsées
        } catch (error) {
          reject(error); // En cas d'erreur (ex: JSON mal formé), on rejette la promesse
        }
      });
    });
  };
  
  module.exports = getPostBodyAsync;
  