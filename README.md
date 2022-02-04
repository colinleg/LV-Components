# Ajouter un composant 

- Développer le composant
- Créer un fichier.vue dans lib-components
- Respecter la structure defineComponent
- Dans lib-components/index.js, exporter le composant :

```
import  lvBtn from './lvBtn.vue'
export { lvBtn }
```
- builder
- joindre le css avec Gulp : (le fichier sera minifié, et exporté dans /dist/style.min.css)

``` 
gulp watch ( optionnel )
gulp minify
```

- up la version du package dans package.json

```
npm publish
```

# Récupérer le composant via npm

```
npm i lv_components
```

main.js
```
import { lvBtn as btn } from 'lv_components'
import 'colinleg_lib/dist/style.min.css'
```

```
.component('btn', btn)
```
