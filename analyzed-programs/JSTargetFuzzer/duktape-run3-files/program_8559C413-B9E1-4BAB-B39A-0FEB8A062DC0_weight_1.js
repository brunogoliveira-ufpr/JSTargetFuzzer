const v1 = new Map();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a4;
    this.f = a4;
    this.c = a4;
}
const v6 = new F2(v1, Map);
const v7 = new F2(v6, Map);
const v8 = new F2(v6, v1);
function f9(a10, a11, a12, a13) {
    const o30 = {
        set f(a15) {
            try {
                super.unshift(v6, a15, a15);
            } catch(e17) {
            }
        },
        set b(a19) {
            var f = a12;
            typeof Map === "number";
            let v24 = 128;
            v6 % "number";
            v24 && -1.9109450104709147;
            ++v24;
        },
    };
    return o30;
}
const v31 = f9(v7, v8, v7, v8);
const v32 = f9(v6, v6, v8, v8);
let v33 = f9(v6, v6, v7, v8);
function F34(a36, a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v31;
    this.a = a38;
}
const v39 = new F34(v6, v7, v32);
const v40 = new F34(Map, v7, v32);
new F34(Map, v7, v32);
v33 = v32;
v32[4294967296] = f9;
const v42 = v33[3476];
Object.defineProperty(v39, "a", { configurable: true, enumerable: true, value: F2 });
if (v42) {
} else {
    v6.e *= v42;
    var g = v40;
}
