function f0() {
    const o9 = {
        "g": 0,
        "d": 0,
        set a(a5) {
            let v4 = this;
            v4[4294967295] += -1000000000.0;
            [,v4,a5] = a5;
            a5.valueOf = v4;
            const o6 = {
            };
            new Proxy(a5, o6);
        },
        "a": -9007199254740990,
    };
    return o9;
}
let v10 = f0();
const v11 = f0();
const v12 = f0();
function f13() {
    return v12;
}
function f14(a15) {
    const o20 = {
        [f13]: f0,
        __proto__: v10,
        "e": v10,
        536870912: a15,
        ...a15,
        ...a15,
        set d(a17) {
            let v18;
            try { v18 = a17(a17, f0); } catch (e) {}
            try { a15.m(f13, a17, v11, v18); } catch (e) {}
        },
        ...a15,
        "d": v12,
    };
    return o20;
}
const v21 = f14(v10);
f14(v10);
f14(v11);
Object.defineProperty(v12, f14, { writable: true, get: f0, set: f0 });
const o30 = {
    __proto__: v12,
    4: f0,
    295817372: v21,
};
v10 = o30;
