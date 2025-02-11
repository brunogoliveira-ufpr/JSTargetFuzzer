function f0() {
    let v1 = 129;
    const o7 = {
        "b": -2854,
        216: v1,
        "h": v1,
        ...v1,
        set g(a5) {
            try { a5(this, -2854); } catch (e) {}
            v1 = -2854;
        },
        "c": 16594.44160494348,
        "f": -2854,
        "g": v1,
        ...-2854,
        2: 16594.44160494348,
        "a": -2854,
    };
    return o7;
}
const v8 = f0();
const v9 = f0();
const v10 = f0();
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a16;
    this.h = v10;
}
const v18 = new F14(v9, v8);
const v19 = new F14(v9, v18);
new F14(v19, 10000);
Object.defineProperty(v19, "bigint", { writable: true, enumerable: true, get: f0, set: f0 });
const o24 = {
    __proto__: v8,
    "a": v10,
    243: v8,
};
new f0();
const o28 = {
    "maxByteLength": 1725,
};
const v30 = new SharedArrayBuffer(127, o28);
new Int8Array(v30);
