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

## Sample code

**Jasmine spy on modules**

```typescript
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const zlib = require("zlib");

describe("SampleService", () => {
  let gzipSpy: jasmine.Spy;

  beforeEach(() => {
    gzipSpy = spyOn(zlib, "gzip");
  });

  describe("serviceMethod()", () => {
    it("successfully calls gzip", async (done) => {
      function mockGzip(body, cb): unknown {
        return cb(null, body);
      }
      gzipSpy.and.callFake(mockGzip);

      // myService.serviceMethod();
    });
  });
});
```

## References

* https://jasmine.github.io/setup/nodejs.html
* https://github.com/inversify/InversifyJS
* https://eslint.org/docs/user-guide/getting-started
