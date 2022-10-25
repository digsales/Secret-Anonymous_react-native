# Secret Anonymous

### Setting up project

    npx create-expo-app SecretAnonymous
    
### Initializing app

    npm start

### Functional component

```js
import React from 'react';
import { Text } from 'react-native';
import Estilo from './estilo';

export default props => {
  return (
    <>
      <Text style={Estilo.fontG}>
        
      </Text>
    </>
  )

};
```

### User snippet for functional component

```js
{
  "Functional Component": {
    "scope": "javascript,typescript",
    "prefix": "compfunc",
    "body": [
      "import React from 'react';",
      "import { Text } from 'react-native';",
      "import Estilo from './estilo';",
      "",
      "export default props => {",
      "  return (",
      "    <>",
      "      <Text style={Estilo.fontG}>",
      "        $1",
      "      </Text>",
      "    </>",
      "  )",
      "",
      "};"
    ],
    "description": "Log output to console"
  }
}
```
