function f3() {
    return 4294967296;
}
let v6 = 127n;
function f7(a8, a9, a10) {
    const o18 = {
        ...a8,
        set b(a12) {
            let v14 = new WeakSet();
            a12 in a12;
            v6 = 28958075n;
            v14 = this;
            try {
                super.call(a12);
            } catch(e17) {
            }
        },
        "g": a9,
        "f": a8,
    };
    return o18;
}
const v19 = f7(f7, 4294967296, -3);
const v20 = f7(f7, 4294967296, -3);
const v21 = f7(2n, -3, 268435441);
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a25;
}
const v26 = new F22(F22, v21);
const v27 = new F22(f3, v20);
new F22(F22, v20);
const o32 = {
};
const v34 = new Proxy(f3, o32);
Object.defineProperty(v26, 85, { writable: true, configurable: true, value: v27 });
v19.valueOf = v34;
