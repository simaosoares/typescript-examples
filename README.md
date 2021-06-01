# TypeScript Examples

Simple project containing TypeScript examples.


## Build and Run
Execute the following commands to run the examples.

```
npm i 
npm run start
```

We can simply compile the sources without the `tsconfig.json`.

```json
{
  "scripts": {
    "compile": "tsc -t ES6 --outDir ./compiled_sources"
  },
  "devDependencies": {
    "typescript": "^4.2.2"
  }
}
```

Generating a `tsconfig.json` file:

```
npx tsc --init 
// or 
./node_modules/typescript/bin/tsc --init
```

## Running Tests
Just simply hit script to run the tests.

```
npm test
```

## References

* https://jasmine.github.io/setup/nodejs.html
