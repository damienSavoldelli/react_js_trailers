# React JS Trailers

## lesson :

https://www.udemy.com/react-redux-tutoriel-pour-debutants-en-francais/

## Api key The Movie Data Base :

- Créer un compte (https://www.themoviedb.org/)
- Paramètres du compte
- API, onglet créer et remplir le formulaire
- Renommer le fichier src/config/api.example.js par src/config/api.js
- Ajouter votre Clé et token API :

```js
const key = '[API_KEY_TMDB]';
const tokenRead = '[API_TOKE_READ_TMDB]';
```

## Pour installer le projet se placer dans le projet et lancer :

```
> npm install
```

## Pour lancer l'application

```
> npm start
```

## Todo :

- Fix contenu à vide quand aucune video youtube
- Fix contenu à vide quand aucun film de la liste
- Proposer plusieurs trailers s'ils existent
- Traduction i18n
- Test Unitaire (Jest, chai, enzyme)
