new Map();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a7;
    this.c = "536870887";
}
const v9 = new F5("536870887", "symbol");
new F5("symbol", "536870887");
const v11 = new F5("symbol", "symbol");
const v17 = new BigUint64Array(2570);
const v20 = new Uint16Array(64);
const v23 = new Int16Array(0);
v17 instanceof BigUint64Array;
function f25(a26, a27) {
    const o30 = {
        get c() {
            v20[v23];
            return "symbol";
        },
        "f": a26,
    };
    return o30;
}
f25(-6479, v9);
f25(64, v11);
f25(-6479, v9);
