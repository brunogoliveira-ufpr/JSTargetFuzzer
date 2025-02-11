const v1 = new Set();
function f12() {
    return -5;
}
class C13 extends Set {
    constructor(a15, a16, a17, a18) {
        super(v1);
        this[a17] = -5;
        delete v1[10];
    }
    set f(a24) {
        -10 in v1;
        v1[255] = a24;
        const o28 = {
            "maxByteLength": 3452807694,
        };
        const v30 = new SharedArrayBuffer(1024, o28);
        new Int32Array(v30);
    }
}
const v33 = new C13(f12, -10, 1487442813, 1024);
const v34 = new C13(13889, 268435439, 1024, -10);
new C13(-10, 13889, 13889, 13889);
function f36(a37, a38, a39) {
    arguments[37] = 268435439;
    v33[v33];
    return arguments;
}
f36(1024, 2147483648, f12);
Object.defineProperty(v1, "c", { writable: true, get: f36, set: f36 });
new Set(C13);
for (let v44 = 0; v44 < 32; v44++) {
    v34["p" + v44] = v44;
}
