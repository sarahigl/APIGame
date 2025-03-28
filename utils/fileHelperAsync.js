const fs = require("fs/promises");//module fs de Node.js pour lire et écrire des fichiers de manière asynchrone
const filePath = require("../utils/filePath");//chemin du fichier JSON

//👉 Sauvegarder des données persistantes, comme une base de données mais en local.

//fonction asynchrone qui écrit les données dans le fichier  JSON
//elle renvoie une promesse qui se résout lorsque l'écriture est terminée
const writeDataAsync = async (users) => {
    try{
        await fs.writeFile(filePath, JSON.stringify(users));//ecrit ces données dans le fichier definie par filePath
        console.log("Données sauvegardées avec succès");
    //JSON.stringify(data) convertit les données en JSON avant de les écrire dans le fichier
    }catch(error){
        console.error("Erreur lors de la sauvegarde des données", error);
        throw error;
    }
    
}

//👉 Lire des données persistantes, comme une base de données mais en local.

//fonction asynchrone qui lit les données du fichier JSON
//elle renvoie un tableau vide si le fichier est vide ou inexistant
const readDataAsync = async () => {
    const rawJson = await fs.readFile(filePath);
    const data = JSON.parse(rawJson) || [];//convertit les données JSON en objet JavaScript
    return data;
};
module.exports = { writeDataAsync, readDataAsync };