const v0 = [];
function f1() {
    const o11 = {
        "f": v0,
        3: v0,
        "c": v0,
        "b": v0,
        __proto__: v0,
        "d": v0,
        [v0]: v0,
        get g() {
            this.length = 2;
            const o6 = {
                "maxByteLength": 257,
            };
            const v8 = new SharedArrayBuffer(257, o6);
            const v10 = new Uint8ClampedArray(v8);
            return v10;
        },
    };
    return o11;
}
const v12 = f1();
const v13 = f1();
f1();
class C15 extends f1 {
    constructor(a17) {
        super();
        v13[536870888];
        const v20 = Symbol.iterator;
        const o29 = {
            [v20]() {
                let v22 = 10;
                const o28 = {
                    next() {
                        v22--;
                        const v26 = v22 == 0;
                        const o27 = {
                            "done": v26,
                            "value": v22,
                        };
                        return o27;
                    },
                };
                return o28;
            },
        };
    }
}
new C15(C15);
const v31 = new C15(v12);
new C15(v13);
new Int32Array(4096);
new Int8Array(127);
new Float64Array(60);
delete v31[v12];
v0[v13] = v0;
60 / C15;
new Float64Array(C15, 56850, -5);
