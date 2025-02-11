function f0() {
    const o19 = {
        "h": "65491",
        4: "65491",
        toString(a5) {
            this[a5];
            this["65491"] = this;
            "65491" + a5;
            super.g = a5;
            const v9 = Symbol.iterator;
            const o18 = {
                [v9]() {
                    let v11 = 10;
                    const o17 = {
                        next() {
                            v11--;
                            const v15 = v11 == 0;
                            const o16 = {
                                "done": v15,
                                "value": v11,
                            };
                            return o16;
                        },
                    };
                    return o17;
                },
            };
            return o18;
        },
    };
    return o19;
}
f0();
f0();
const v22 = f0();
let v27 = 1110421509;
const v31 = new BigUint64Array(1024);
const v34 = new Uint16Array(0);
new Int8Array(5);
v31[v34] = f0;
v27 = -15;
Object.defineProperty(v34, 104, { writable: true, set: f0 });
try { v22.toString(v34); } catch (e) {}
new WeakSet();
v31.byteOffset = 1024;
