function f0() {
}
function f1() {
    return f0;
}
const v4 = new Uint32Array(231);
const v7 = new Int32Array(256);
const v10 = new BigInt64Array(3560);
function f11(a12, a13, a14) {
    const o19 = {
        "g": 3560,
        set a(a16) {
            try { a13.n(a14, a12, Int32Array, f0, 256); } catch (e) {}
            a16?.[235];
        },
        __proto__: a13,
        "b": 3560,
        "h": f1,
        "d": a14,
        [a12]: a14,
        1: 3560,
        [a13]: 3560,
    };
    return o19;
}
f11(3560, 3560, 256);
const v21 = f11(231, v4, 3560);
const v22 = f11(256, v7, 231);
const v23 = f0();
let v24 = f11(...v7, Uint32Array, ...v10, v23);
const v25 = v24 && v22;
v25.__proto__;
[v24 = v21,v23,v25];
[256,Int32Array,Int32Array,v7];
([f1,v10,v24])["toString"]();
