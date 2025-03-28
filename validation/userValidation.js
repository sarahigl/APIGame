// empêche une requête incorrecte d'atteindre le contrôleur en renvoyant une erreur si des champs sont manquants.

const getPostBodyAsync = require("../utils/getPostBodyAsync");
const {response} = require("../utils/response");

const validateUserData = async (req, res, next) => {
    try{
        const body = await getPostBodyAsync(req); //fonction asynchrone qui extrait les données envoyées dans le body de la requête HTTP.
        //on vérifie si les données sont valides(ajouter un nettoyage des données)
        if(!body.name || !body.phone || !body.email){
            return response(res, 400, "Tout les champs doivent etre remplis !");
        }
        //si les données sont valides, on les ajoute à req.body et on appelle next()
        //ajoute à req.body pour que le prochain middleware puisse les utiliser
        req.body = body;
        next();//signifie "continue vers la prochaine étape"

    }catch(error){
        console.log(error);
        //si une erreur survient, on renvoie une réponse avec un code 500
        return response(res, 500, "Erreur lors de la validation des données");
    }
};

module.exports = {
    validateUserData
};
