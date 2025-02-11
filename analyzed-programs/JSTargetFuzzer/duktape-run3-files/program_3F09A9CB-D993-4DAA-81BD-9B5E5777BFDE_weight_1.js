const v1 = new WeakMap();
function f2(a3, a4) {
    const o8 = {
        "e": WeakMap,
        [WeakMap]: a3,
        ...v1,
        ...v1,
        "h": a4,
        p(a6) {
            let v7;
            try { v7 = new a3(WeakMap, v1, v1, a6, ...a4); } catch (e) {}
            return v7;
        },
        ...v1,
        "b": a3,
        __proto__: a4,
    };
    return o8;
}
let v9 = f2(WeakMap, WeakMap);
const v10 = f2(v1, v9);
let v11 = f2(f2, v9);
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v9;
    this.a = a15;
}
new F12(v10, v9);
new F12(v10, v10);
new F12(v10, v11);
v9 /= v9;
v11 - f2;
switch (-1.082351709986544e+308) {
    case F12:
        [-9.275609665635454,-1000000.0];
        [2.220446049250313e-16,-Infinity,-1.7976931348623157e+308,3.8650082066195033,0.6653705156131973,Infinity,-3.0,-0.0,-2.220446049250313e-16,-2.0];
        [-5.0,596.3275198034414,120778.0371485767,-1.0448164542497052e+308,-2.0,-0.7434013582567758];
        break;
}
v11 <<= v11;
