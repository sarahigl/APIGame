//importation des built-in modules de nodejs
const http = require("http");//permet de créer un serveur http et de supporter les requêtes http
const url = require("url");//permet de parser les urls

//importation des modules personnalisés(routes et middlewares)
const routes = require("./routes");//tout les endpoints de l'application
const { loggerMiddleware } = require("./middleware/logger");//middleware de logging des requêtes


//Définition du port sur lequel le serveur écoute
const PORT = process.env.PORT || 4000;

//Création du serveur
const server = http.createServer((req, res) => { //logique de requete et de réponse
    //handling requests
    const parsedUrl = url.parse(req.url, true);//parsing de l'url de la requête
    const query = parsedUrl.query;//extraction des paramètres de la requête
    const path = parsedUrl.pathname;//extraction du chemin de la requête
    const method = req.method.toUpperCase();//extraction de la méthode de la requête
    
    let handler = routes[path]&&routes[path][method];
    
    //logique de réponse pour les requêtes non gérées
    if(!handler){
        //identitication d'une route dynamique correspondante
    
        //pas de handler qui matche le chemin de la requête alors on filtre les keys à la recherche de keys dynamiques (:id, :name, etc)
        const routeKeys = Object.keys(routes).filter((key) => key.includes(":"));//route=contient les routes de l'application
    
        //Trouver la route dynamique correspondante à path
        const matchedKey = routeKeys.find((key) => {
            //routes dynamiques (ex: /users/:id) {vs endpoint(/users/1)}
            //On crée une expression régulière pour convertir la route dynamique en format valide
        const regex = new RegExp(`^${key.replace(/:[^/]+/g, "([^/]+)")}$`);
        //on teste si la route dynamique matche path
        return regex.test(path);
        });
    
        //on trouve un match pour une route dynamique
        if (matchedKey) {
            //Si matchedKey existe, on sait que path correspond à une route dynamique, et on peut extraire les paramètres dynamiques.
        
          //Créer une regex basée sur matchedKey pour extraire les valeurs dynamiques
          const regex = new RegExp(`^${matchedKey.replace(/:[^/]+/g, "([^/]+)")}$`);//permettra d'extraire les valeurs des paramètres de path.
          //Extraire les valeurs des paramètres dynamiques depuis path
          const dynamicParams = regex.exec(path).slice(1);//regex.exec(path) exécute la regex sur path et retourne un tableau. 
          //.slice(1) enlève la première valeur (la correspondance complète) et garde seulement les paramètres dynamiques. 
          //path = "/users/123", on obtient ["123"].
          
          //trouver la methode qui gere la route dynamique
          const dynamicHandler = routes[matchedKey][method];//On récupère le handler (la fonction qui répond à la requête) en fonction du matchedKey et du method (GET, POST, etc.).
          //Extraire les noms des paramètres dynamiques (ou clefs) //(ex: /users/:id → [':id'])
          const paramKeys = matchedKey.match(/:[^/]+/g).map((key) => key.substring(1));
          //Créer un objet contenant les paramètres dynamiques (ex: { id: '123' })
          const params = dynamicParams.reduce((acc, val, i) => ({ ...acc, [paramKeys[i]]: val }),{});//On associe chaque valeur extraite (dynamicParams) à son nom (paramKeys).
          //Ex : si paramKeys = ['id'] et dynamicParams = ['123'], alors on obtient { id: '123' }
          
          //Associer ces paramètres à l'objet req
          req.params = params;//On ajoute l'objet params à l'objet req pour que le handler puisse y accéder.
          //definition du handler final
          handler = dynamicHandler;//On stocke la fonction qui va gérer la requête.
        }
    }
    //finalement si on a pas trouvé de handler pour la requête alors 404 not found
    if(!handler){
        //logique de réponse pour les requêtes non gérées par le premier if
        handler = routes.notFound;
    }

      // set query string in req
    req.query = {};

    for (const key in query) {
        req.query[key] = query[key];
    }

    handler(req, res);//appel du handler de la  en lui passant les objets req et res
});

//ajout du middleware de logging a la liste des listeners de l'event request
server.on("request", loggerMiddleware);
//démarrage du serveur sur le port spécifié
server.listen(PORT,()=> console.log('Server listening on port: ${PORT}'));






