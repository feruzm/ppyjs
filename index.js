var ppyjs = require('peerplaysjs-lib');

var _require3 = require('peerplaysjs-ws'),
    Apis = _require3.Apis,
    ChainConfig = _require3.ChainConfig;


ChainConfig.setChainId("6b6b5f0ce7a36d323768e534f3edb41c6d6332a541a95725b98e28d140850134");

let seed = "random brain key";

//(ppyjs.key).normalize_brainKey(seed)

let pkey = ppyjs.PrivateKey.fromSeed(seed)
let ppkey = (ppyjs.key).get_brainPrivateKey(seed, 0);


//console.log("pkey: ", pkey);
//console.log("ppkey: ", ppkey);

console.log("\nPrivate key:", pkey.toWif());
console.log("Public key :", pkey.toPublicKey().toString(), "\n");

console.log("\nPrivate brain key:", ppkey.toWif());
console.log("Public brain key :", ppkey.toPublicKey().toString(), "\n");