# @nativescript/firebase-core

```cli
ns plugin add @nativescript/firebase-core
```

## Usage
Make sure you have your `google-services.json` file located in `App_Resources/src`.

### Initialize Default App

```ts
import { firebase } from '@nativescript/firebase-core'
const defaultApp = firebase().initializeApp()
```

### Initialize Secondary App

```ts
import { firebase, FirebaseOptions } from '@nativescript/firebase-core'
const config = new FirebaseOptions()
const secondaryApp = firebase().initializeApp(config, 'SECONDARY_APP')
```


## License

Apache License Version 2.0
