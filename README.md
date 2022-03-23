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

## buffer.readUInt8()
```javascript
// buffer.readUInt8() method
const obj = Buffer.from([ 0X52, 0X40, 0X78 ]);

// It returns the first value
console.log(obj.readUInt8(0));

// It returns the third value
console.log(obj.readUInt8(2));
const temp = Buffer.from("XYZ");

// It returns the ASCII value of capital 'X'
console.log(temp.readUInt8(0));
```

> Remember: 1 byte = 8 bits = [0-255] :)

## crypto

```javascript
crypto.randomBytes(1).readUInt8(0);
// crypto.randomBytes(1).readUInt8(1); // error
```

## References

* https://jasmine.github.io/setup/nodejs.html
* https://github.com/inversify/InversifyJS
* https://eslint.org/docs/user-guide/getting-started
* https://www.geeksforgeeks.org/node-js-buffer-readint8-method/
* https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback
