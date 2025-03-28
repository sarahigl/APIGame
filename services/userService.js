const { readDataAsync } = require('../utils/fileHelperAsync');

//fonction asynchrone qui renvoie les utilisateurs
//elle appelle la fonction readDataAsync() qui renvoie les données du fichier JSON

const getUsers = async () => {
    return readDataAsync();
}

module.exports = { getUsers };