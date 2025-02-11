function f3() {
    return 752533779;
}
function f4(a5) {
    const o14 = {
        ...a5,
        [a5](a7) {
            h = 752533779;
            let v8;
            try { v8 = this.valueOf(this, this, 752533779); } catch (e) {}
            v8?.b;
            a5?.d;
            const o11 = {
                "apply": f3,
                "call": f3,
                "deleteProperty": f3,
                "getPrototypeOf": f3,
                "ownKeys": f3,
                "preventExtensions": f3,
                "set": f3,
                "setPrototypeOf": f3,
            };
            new Proxy(this, o11);
            return -6;
        },
    };
    return o14;
}
f4(f3);
f4(752533779);
const v17 = f4(f3);
function f21() {
    return v17;
}
v17.g;
throw f3;
const v25 = Symbol.iterator;
const o34 = {
    [v25]() {
        let v27 = 10;
        const o33 = {
            next() {
                v27--;
                const v31 = v27 == 0;
                const o32 = {
                    "done": v31,
                    "value": v27,
                };
                return o32;
            },
        };
        return o33;
    },
};
