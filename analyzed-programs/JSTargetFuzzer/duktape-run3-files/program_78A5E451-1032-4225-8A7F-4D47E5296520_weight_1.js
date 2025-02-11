function f0() {
}
class C1 {
    constructor() {
        this[197] = f0;
        try { this.p(this, f0, f0, this, this); } catch (e) {}
        const o4 = {
            "apply": f0,
            "defineProperty": f0,
            "deleteProperty": f0,
            "get": f0,
            "getOwnPropertyDescriptor": f0,
            "has": f0,
            "isExtensible": f0,
            "ownKeys": f0,
            "preventExtensions": f0,
            "set": f0,
            "setPrototypeOf": f0,
        };
        new Proxy(this, o4);
    }
}
const v7 = new C1();
const v8 = new C1();
const v9 = new C1();
const v11 = new WeakMap();
const v12 = [C1,v11,v9,f0];
const v13 = [v11,v8,v9,v7];
[f0,v13,v13];
v12[v9] = v11;
const v16 = Symbol.iterator;
const o25 = {
    [v16]() {
        let v18 = 10;
        const o24 = {
            next() {
                v18--;
                const v22 = v18 == 0;
                const o23 = {
                    "done": v22,
                    "value": v18,
                };
                return o23;
            },
        };
        return o24;
    },
};
