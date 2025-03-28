const userSevice = require("../services/userService");
const {response} = require("../utils/response");
const { writeDataAsync } = require("../utils/fileHelperAsync");
const { use } = require("react");

const createUser = async (req, res) => {
    try{
        let body = req.body;
        const users = await userSevice.getUsers();
        console.log("Utilisateurs avant ajout :", users);
        console.log("Données reçues :", body);

        const userExists = users.find((user) => user.email === body.email);
        if(userExists){
            return response(res, 409, null, "Un utilisateur avec cet email existe déjà !");
        }
        body.id = users.length + 1;
        users.push(body);
        console.log("Utilisateurs après ajout :"); 

        await writeDataAsync(users);
        response(res, 201, body, "Utilisateur créé avec succès" + users);

    }catch(error){
        console.error("Erreur dans la fonction createUser :", error);
        response(res, 500, null, "Erreur de création du user");
    }
}
const getUsers = async (_req, res) => {
    try{
        const users = await userSevice.getUsers();
        response(res, 200, users, "Liste des utilisateurs récupérée avec succès");
    }catch(error){
        response(res, 400, null, error.message);
    }
};
module.exports = {
    createUser,
    getUsers
};