const v1 = new WeakSet();
let v6 = 9007199254740990;
for (const v11 in v1) {
    for (let v12 = 0; v12 < 9; v12++) {
        v6 += v12;
    }
    const v14 = Symbol.isConcatSpreadable;
    v1[v14] = v14;
}
