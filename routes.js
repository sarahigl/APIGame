const userController = require("./controllers/userController");
const {response} = require("./utils/response");
const { validateUserData } = require("./validation/userValidation");

const routes = {
    //structure d'objets ou chaque clé est une route et 
    //chaque valeur est un objet qui contient des fonctions pour chaque méthode HTTP
    "/":{
        GET: (_req, res)=>{
            response(res,"Welcome to the API");
        },
    },
    "/utilisateurs":{
        GET: userController.getUsers,
        POST: (req, res)=>{//fonction anonyme qui appelle validateUserData et si les données sont valides, appelle createUser
            validateUserData(req, res, () => {
                // Si la validation réussit, appel de createUser
                userController.createUser(req, res);
            });        
        },
    },
    notFound: (_req, res) => {
        response(res, 404,"requested resource not found!");
      },
};
module.exports = routes;