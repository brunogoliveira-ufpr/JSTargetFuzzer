const v1 = new WeakSet();
const v6 = new Set();
function f10() {
    return Set;
}
Object.defineProperty(v1.a, "g", { writable: true, get: f10, set: f10 });
const v12 = v6[WeakSet];
Object.defineProperty(v6, 4, { writable: true, configurable: true, get: f10, set: f10 });
v12.__proto__;
new WeakSet(v6);
v6[WeakSet];
new BigUint64Array(9);
new Float32Array(1596);
new Uint32Array(256);
