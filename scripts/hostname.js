const os = require('os');
const name = os.hostname();
const domain = 'esri.com';

module.exports = name.endsWith(domain) ? name : `${name}.${domain}`;