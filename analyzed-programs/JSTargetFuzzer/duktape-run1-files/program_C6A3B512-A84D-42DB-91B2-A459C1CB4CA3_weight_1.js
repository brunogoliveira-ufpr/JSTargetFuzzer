const v1 = new Map();
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a7;
    this.g = a7;
    this.b = 59235;
}
const v8 = new F5(27099);
const v9 = new F5(27099);
const v10 = new F5(4294967297);
function f11(a12, a13, a14) {
    const o32 = {
        [59235](a16, a17) {
            const v18 = v9 & a14;
            v9.b = a13;
            return v18;
        },
        "h": 59235,
        n(a20, a21, a22) {
            let v19 = this;
            v9[a21] = a12;
            a20 >> v10;
            v1.__proto__ = v10;
            Math.log(v19);
            +-2;
            let v29 = v19++;
            --v29;
            Math.abs(v19);
            return a12;
        },
    };
    return o32;
}
f11(59235, 27099, v9);
const v34 = f11(4294967297, 27099, v10);
const v35 = f11(v34, 4294967297, v10);
async function f36(a37, a38, a39) {
    const v40 = v34[a37];
    Object.defineProperty(a38, 3706, { writable: true, configurable: true, get: f11 });
    const v41 = v10.__proto__;
    let v42;
    try { v42 = v8.valueOf(v40, v41, v40, v41); } catch (e) {}
    v8 ** v42;
    await v9;
    return a37;
}
f36(27099, v35, 4294967297);
