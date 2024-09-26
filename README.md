# Dropzy

Dropzy est une librairie permettant d'ajouter à un projet ReactJS une liste déroulante personnalisable.

## Spécification

- Champs de recherche : _Permet d'effectuer une recherche dans les différentes valeurs_
- Animation : _Animation à l'ouverture et à la fermeture de la liste déroulante_
- Responsive : _S'adapte à toutes les tailles d'écrans_
- Personalisable : _Possibilité de modifier plusieurs options_
- Clavier : _Navigable au clavier_

## Installation

1. Pour installer Dropzy :

```
npm install dropzy
```

2. Importation de Dropzy :

```JavaScript
import Dropzy from 'dropzy';
```

3. Utilisation de Dropzy dans votre projet ReactJS

```JavaScript
import { useState } from 'react';

import Dropzy from './components/Dropzy';

export default function App() {
	const [value, setValue] = useState(''); // Permettant d'initialiser la valeur et de récupérer la selection de l'utilisateur
    const options = [
        "value 1",
        "value 2"
    ];
	return (
		<div className='form'>
			<Dropzy
				value={value}
				setValue={setValue}
				options={options}
			/>
		</div>
	);
}
```

## Options disponibles

| Option        | Type de donnée        | default   | Example                            | required                                                       | Description                                                           |
| ------------- | --------------------- | --------- | ---------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------- |
| value         | string                | ''        | `value={''}`                       | OUI                                                            | Variable contenant la valeur selectionné par l'utilisateur            |
| setValue      | func                  |           | `setValue={setValue}`              | OUI                                                            | Fonction useState permettant de mettre la jour la valeur              |
| options       | array                 | []        | `options={['value 1", "value 2"]}` | OUI                                                            | Tableau des options                                                   |
| animate       | booléan (true\|false) | true      | `searchInput={false}`              | NON Suppression de l'animation à l'ouverture et à la fermeture |
| searchInput   | booléan (true\|false) | true      | `searchInput={false}`              | NON                                                            | Mise en place d'un champs de recherche au sein de la liste déroulante |
| color         | string                | '#0486c2' | `color={'#FFFFFF'}`                | NON                                                            | Fond des valeurs au survol de la souris                               |
| selectHeight  | string                | '30px'    | `selectHeight={'100vh'}`           | NON                                                            | Changement de la taille du select                                     |
| optionsHeight | string                | '150px'   | `optionsHeight={'100vh'}`          | NON                                                            | Changement de la taille du select ouvert                              |

## Développeur

Liste déroulante créée par Camille CRAPAT - Kuusenmetsa
