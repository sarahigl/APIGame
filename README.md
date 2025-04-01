# RandomAPI 🚧 En Construction

Une API REST construite en JavaScript vanilla (sans framework) pour tester et expérimenter avec les concepts fondamentaux des API.

## Description

Ce projet est une implémentation d'une API REST en JavaScript vanilla, démontrant les concepts fondamentaux de la création d'API sans l'utilisation de frameworks populaires comme Express.js. Il inclut une gestion personnalisée des routes, des middlewares, et une architecture MVC.

## Objectif du Projet

Ce projet vise à créer une application de gestion de collection de jeux vidéo permettant aux utilisateurs de :
- Ajouter des jeux à leur collection
- Suivre leur progression dans chaque jeu
- Noter et commenter leurs jeux
- Organiser leur collection par plateforme et genre
- Gérer différents statuts d'avancement (Non commencé, En cours, Terminé, Abandonné)

## Structure du Projet

```
randomAPI/
├── controllers/     # Logique de traitement des requêtes
├── db/             # Configuration et modèles de base de données
├── middlewares.js  # Middlewares de l'application
├── public/         # Fichiers statiques
├── routes.js       # Définition des routes
├── server.js       # Point d'entrée de l'application
├── services/       # Logique métier
├── utils/          # Utilitaires
├── validation/     # Validation des données
├── form.html       # Interface utilisateur
└── form.css        # Styles CSS
```

## Fonctionnalités

- Gestion des requêtes HTTP (GET, POST, PUT, DELETE)
- Support des routes dynamiques (ex: `/users/:id`)
- Middleware de logging des requêtes
- Architecture MVC
- Validation des données
- Gestion des paramètres de requête et des corps de requête
- Interface utilisateur simple
- Formulaire d'ajout de jeux avec :
  - Nom du jeu
  - Plateforme
  - Genre
  - Statut d'avancement
  - Système de notation
  - Commentaires

## Prérequis

- Node.js (version récente recommandée)
- npm (gestionnaire de paquets Node.js)


## Technologies Utilisées

- JavaScript (Vanilla)
- Node.js
- HTTP (built-in)
- PostCSS
- Autoprefixer

## État du Projet

Ce projet est actuellement en cours de développement. Les fonctionnalités suivantes sont en cours d'implémentation :
- [ ] Système d'authentification
- [ ] Interface de visualisation de la collection
- [ ] Système de filtrage et de recherche
- [ ] Statistiques de progression
- [ ] Export/Import de collection

## Auteur

Sarah Iglla

## Licence

ISC 