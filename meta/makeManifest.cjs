const fs = require('fs');
const path = process.platform == 'win32' ? require('path/win32') : require('path/posix');
const jsonc = fs.readFileSync(path.resolve(__dirname, '..', 'manifest.jsonc'));
const json = JSON.stringify(Function(`return (${ jsonc }\n);`)());
fs.writeFileSync(path.resolve(__dirname, '..', 'manifest.json'), json);