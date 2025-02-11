function f0() {
    const o12 = {
        get d() {
            const v5 = this.__proto__;
            const v7 = this !== v5 ? this : v5;
            delete this[3];
            var h = "buffer";
            return v7;
        },
        "b": 7,
        58759568: "buffer",
        "f": 13213,
        "h": 7,
    };
    return o12;
}
f0();
const v14 = f0();
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
            a29 **= a29;
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
    return o42;
}
f23(v21, v21, v20, v22);
f23(v21, v15, v22, v22);
f23(v15, v15, v22, v21);
function f49() {
    const o53 = {
        ["b"]: "b",
        "d": 14,
        __proto__: "d",
        "e": 14,
        [14]: "b",
        ["d"]: "b",
        "f": "d",
        "b": "b",
        "g": "b",
        "h": 14,
    };
    return o53;
}
const v54 = f49();
const v55 = f49();
const v56 = f49();
v54[16];
const t68 = "localeCompare";
t68[2147483648] = "DBBG0";
for (let v64 = 0; v64 < 91; v64++) {
    const v66 = Symbol.species;
    v55[v66] = v66;
}
for (let v67 = 0; v67 < 32; v67++) {
    v56["p" + v67] = v67;
}
