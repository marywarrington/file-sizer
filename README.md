# Get File Fizes

This package returns file sizes.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Install using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install get-file-sizes
```

## Usage

#### CLI

```bash
$ node cli.js [folder]
```

**Returns**

```js
[ { filePath: 'tests/fixtures/cropped-coffee.jpg',
    size: '129.44KB',
    sizeKb: '129.44KB',
    sizeRaw: 132548 },
  { filePath: 'tests/fixtures/sample.txt',
    size: '867B',
    sizeKb: '0.85KB',
    sizeRaw: 867 } ]
```


| Name    | Type     | Description         |
|---------|----------|---------------------|
| size    | `string` | Value               |
| sizeKb  | `string` | Value in Kilobytes  |
| sizeRaw | `number` | Value in bytes      |

#### JS

```js
const getFileSizes = require('get-file-sizer');
```

## License

This package is released under the terms of the [MIT License](LICENSE).