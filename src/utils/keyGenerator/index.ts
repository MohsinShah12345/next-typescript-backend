import { generateKeyPair } from "crypto";

const keyGenerator =  generateKeyPair('ec', {
  namedCurve: 'secp256k1',   // Options
  publicKeyEncoding: {
    type: 'spki',
    format: 'der'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'der'
  }
},
 (err, publicKey, privateKey) => { // Callback function
       if(!err)
       {
         console.log("Public Key is: ",publicKey.toString('hex'));
         console.log("Private Key is: ",privateKey.toString('hex'));
       }
       else
       {
         console.log("Errr is: ", err);
       }
         
  });
  module.exports = keyGenerator