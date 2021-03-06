# JSON Web Key JSON Schema and TypeScript Types

* Author: [Jonathan M. Wilbur](https://github.com/JonathanWilbur) <[jonathan@wilbur.space](mailto:jonathan@wilbur.space)>
* Copyright Year: 2020
* License: [MIT License](https://mit-license.org/)

JSON Schema (both as a JavaScript Object and as JSON) and TypeScript
interfaces for representing JSON Web Keys, as described
[here](https://tools.ietf.org/html/rfc7517#section-4).

## Recreate

I am not going to implement scripts or automation for this, because it will
probably not going to change very often.

1. Compile `index.ts` to `index.js`: `tsc ./source/index.ts`.
2. Convert `index.js` to `index.json`: `node -e 'console.log(JSON.stringify(require(\"./source/index.js\").default));' > .\source\index.json`.
3. Convert `index.json` to `index.d.ts`: `node ./tools/compileInterfaces.js`.
4. Just manually dereference `JSONWebKey` in `index.json` to create `index.deref.json`.
