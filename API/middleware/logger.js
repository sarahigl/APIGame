// Initiate all middleware here
const loggerMiddleware = (req, res) => {
  console.log(`${req.method} ${req.url}`);
};
module.exports = loggerMiddleware;

/*Le middleware est une fonction intermédiaire qui s'exécute entre la réception d'une requête 
par le serveur et l'envoi de la réponse. Il permet d'ajouter des traitements comme :

✅ La journalisation (logs) : Suivre les requêtes entrantes (loggerMiddleware).
✅ L'authentification : Vérifier si l'utilisateur est connecté.
✅ La validation des données : Vérifier si les données envoyées sont correctes.
✅ La gestion des erreurs : Intercepter et répondre aux erreurs proprement.
✅ Le parsing (corps de requête JSON) : Convertir req.body en objet utilisable.
*/