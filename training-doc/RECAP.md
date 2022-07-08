# React JS

# React Outils
 * NODE + NPM
    * create-react-app
    * generate-react-cli
    * @emotion/styled - @emotion/react
    * redux - @reudx/toolkit
    * redux-devtools
    * storybook
    * tsdoc/typedoc
    * awesome-react 
        * Librairies de composant graphique
            * @mui
            * react-bootstrap
            * react-virtualized
            * react-router

# React Component

> Création de componsant sous deux formes.

* `class component`
    * Hérite de React.Component
    * Lifecycle Hooks (`componentDidMount`, `componentDidUpdate`, `componentWilUnmount`...)
    * Component Render State (`state`, `setState`)

* `functional component`
    * Doivent utiliser les `functionnal hooks`
    * Component Render State (`React.useState`)
    * Lifecycle Hooks (`React.useEffect`)

> Les hooks prennent sens via des "customHook" 

# Structuration Applicative

> Importance de la sémantique - Expliciter les Abstractions.
* Découper en composants.
    * Surveiller commit React et DOM changement.
* Classifier les composants.


> Clarifier la relation Vue/Service


# Component Pattern

* Composition
* Slot
* Custom Hook


# Application Web Metrics

* https://create-react-app.dev/docs/measuring-performance/
* https://pagespeed.web.dev/?hl=fr
* https://developers.google.com/speed
* https://owasp.org/

* DOM Nodes : 5k<, 5-10k, >15k
* FPS : 30-60
* FCP : 2s<
* TTI : 6s<






# React Recommandation


* Petit Composant  - Granularité des composants
* Sémantique       - Maintenabilité
    * Identifier les type des composant par lee nommage
        * Base
        * Feature
        * View
    * Identifier les service
    * Identifier les hooks
* Veille les dépendances externes
    * Redux
    * Mui
    * emotion
    * Storybook
    * axios
    * react-virtualized
    * typescript
    * lodash
* Refactoriser immédiatemment les hook en custom hook
* Web Metrics


