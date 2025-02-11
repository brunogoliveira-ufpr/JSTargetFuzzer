function f0() {
    const o12 = {
        get d() {
            const v5 = this.__proto__;
            const v7 = this !== v5 ? this : v5;
            const t4 = "buffer";
            delete t4[3];
            var h = "buffer";
            return v7;
        },
        "b": 7,
        58759568: "buffer",
        "f": 7,
        "h": 7,
    };
    return o12;
}
f0();
let v14 = f0();
const v15 = f0();
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a18;
    this.c = a19;
    this.d = f0;
}
const v20 = new F16(f0, v15);
let v21 = new F16(v14, v20);
const v22 = new F16(F16, v21);
function f23(a24, a25, a26, a27) {
    const o42 = {
        set d(a29) {
            v14 **= a29;
            v22 === f0 ? v22 : f0;
        },
        "g": a25,
        set f(a33) {
            for (let v34 = 0; v34 < 32; v34++) {
                v15["p" + v34] = v34;
                this[3806978422] = a25;
                try { a33(a33, v34); } catch (e) {}
            }
            ({"c":a26,"d":v21,"g":a26,} = v22);
            try { new a33(); } catch (e) {}
        },
    };
    const v45 = [512,-6,6] > 512;
    const o48 = {
        get f() {
            return ~v45;
        },
    };
    return o42;
}
f23(v21, v21, v20, v22);
f23(v21, v15, v22, v22);
f23(v15, v15, v22, v21);
function f55() {
    const o59 = {
        ["b"]: "b",
        "d": 14,
        __proto__: "d",
        "e": 14,
        [-13242]: "b",
        ["b"]: "b",
        "f": "d",
        "b": "b",
        "g": "b",
        "h": 14,
    };
    return o59;
}
const v60 = f55();
const v61 = f55();
const v62 = f55();
v60[16];
const t75 = "localeCompare";
t75[2147483648] = "DBBG0";
for (let v70 = 0; v70 < 91; v70++) {
    const v72 = Symbol.species;
    v61[v72] = v72;
}
for (let v73 = 0; v73 < 32; v73++) {
    v62["p" + v73] = v73;
}
