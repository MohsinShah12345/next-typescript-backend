"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const keyGenerator = (0, crypto_1.generateKeyPair)('ec', {
    namedCurve: 'secp256k1',
    publicKeyEncoding: {
        type: 'spki',
        format: 'der'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'der'
    }
}, (err, publicKey, privateKey) => {
    if (!err) {
        console.log("Public Key is: ", publicKey.toString('hex'));
        console.log("Private Key is: ", privateKey.toString('hex'));
    }
    else {
        console.log("Errr is: ", err);
    }
});
module.exports = keyGenerator;
