function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = f0;
}
const v3 = new F1();
new F1();
new F1();
new Uint8ClampedArray(4);
const v11 = new Int16Array(195);
const v14 = new BigUint64Array(2104);
new Set();
Object.defineProperty(v3, F1, { configurable: true, enumerable: true, get: f0 });
("undefined").normalize("NFKC");
v11[v3] = "undefined";
try { v14.reduce(f0); } catch (e) {}
new F1();
v14[224] = BigUint64Array && Int16Array;
const v24 = Symbol.iterator;
const o33 = {
    [v24]() {
        let v26 = 10;
        const o32 = {
            next() {
                v26--;
                const v30 = v26 == 0;
                const o31 = {
                    "done": v30,
                    "value": v26,
                };
                return o31;
            },
        };
        return o32;
    },
};
