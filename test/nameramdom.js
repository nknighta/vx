const crypto = require('crypto')
const N = 32

const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

const fgen = Array.from(crypto.randomFillSync(new Uint8Array(N))).map((n) => S[n % S.length]).join('')

for (let i = 0; i < 200; i++) {
    const idv = Array.from(crypto.randomFillSync(new Uint8Array(N))).map((n) => S[n % S.length]).join('')
    if (idv === fgen) {
        console.log("fail! !!!" + idv);
    } else {
        console.log("OK! >>>" + idv)
    }
}
