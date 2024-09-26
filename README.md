# Dropzy

Dropzy is a customizable drop-down list for your ReactJS project.

## Specification

- <ins>Search box :</ins> _You can use the search box to filter dropdown list items_
- <ins>Animation :</ins> _Animation of drop-down list on opening and closing_
- <ins>Responsive :</ins> _Adapts to all screens size_
- <ins>Customizable :</ins> _Ability to modify several options_
- <ins>Accessibility :</ins> _Navigable with keyboard_

## Installation

1. You can install the Dropzy library with npm :

```
npm install dropzy
```

2. Import Dropzy on your ReactJS project :

```JavaScript
import { Dropzy } from 'dropzy';
```

3. Use the Dropzy component in your React project :

```JavaScript
import { useState } from 'react';

import { Dropzy } from 'dropzy';

export default function App() {
	const [value, setValue] = useState('');
    const options = [
        "value 1",
        "value 2"
    ];
	return (
		<div>
			<Dropzy
				value={value}
				setValue={setValue}
				options={options}
			/>
		</div>
	);
}
```

## Options

| Option        | Data type               | Default   | Example                            | Required | Description                                          |
| ------------- | ----------------------- | --------- | ---------------------------------- | -------- | ---------------------------------------------------- |
| value         | string                  | ''        | `value={value}`                    | YES      | Value of useState with value select by user          |
| setValue      | function                |           | `setValue={setValue}`              | YES      | Function useState for change value                   |
| options       | array                   | []        | `options={['value 1", "value 2"]}` | YES      | Options array                                        |
| animate       | booléan (true \| false) | true      | `searchInput={false}`              | NO       | Remove animation when opening and closing dropdown   |
| searchInput   | booléan (true \| false) | true      | `searchInput={false}`              | NO       | removing search box to filter dropdown list items    |
| color         | string                  | '#0486c2' | `color={'#FFFFFF'}`                | NO       | Change Background color of the option at hover mouse |
| selectHeight  | string                  | '30px'    | `selectHeight={'100vh'}`           | NO       | Change drop-down list height size                    |
| optionsHeight | string                  | '150px'   | `optionsHeight={'100vh'}`          | NO       | Change box height size                               |

## Developer

Drop-down list create by Kuusenmetsa - Camille Crapat
