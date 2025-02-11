new Map();
new Date();
new Int32Array(2798);
new BigInt64Array(257);
new Int8Array(3028);
for (let v13 = 0; v13 < 32; v13++) {
    Date["p" + v13] = v13;
}
for (let i18 = 0, i19 = 10; i18 < i19; i18++, i19--) {
    Date[Symbol.toStringTag] = i19;
}
