function f3(a4, a5) {
    const o20 = {
        "b": 2113758204,
        p(a7) {
            new Int32Array(6);
            new Float32Array(2);
            new Int32Array(10);
            return 10;
        },
    };
    return o20;
}
const v21 = f3(5, 2113758204);
const v22 = f3(5, 5);
const v23 = f3(2147483649, 2147483649);
function F24(a26, a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 2113758204;
}
const v30 = new F24(2147483649, v21, v23, v22);
const v31 = new F24(5, v23, v23, v23);
const v32 = new F24(2147483649, v21, 5, v22);
class C33 extends f3 {
    static #c;
    static toString(a35, a36, a37, a38) {
        Object.defineProperty(v31, "a", { writable: true, configurable: true, enumerable: true, get: f3 });
        v31.c;
        return 2147483649;
    }
    constructor(a42, a43, a44, a45) {
        super(2113758204, a45);
        try {
            a43.#c += f3;
        } catch(e46) {
        }
        v30[2];
    }
}
const v48 = new C33(5, 2147483649, 2147483649, 2113758204);
new C33(2147483649, v32, 2113758204, 2113758204);
new C33(2147483649, v48, 2147483649, 5);
function F51(a53, a54) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = F24;
    this.c = v48;
    this.e = v30;
}
new F51(v32, v23);
let v56 = new F51(v32, v21);
new F51(v30, v22);
v48[v56 = v32] = C33;
