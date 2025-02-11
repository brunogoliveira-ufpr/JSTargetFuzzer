let v2 = 4294967296n;
class C3 {
    static p(a5) {
        [v2,,a5] = v2;
        v2[Symbol.split] = 14n;
        return this;
    }
    8 = 14n;
    static 16 = 3n;
    static d;
    b;
}
const v11 = new C3();
const v12 = new C3();
const v13 = new C3();
class C14 extends C3 {
    static #f;
    #n(a16, a17, a18, a19) {
        const v23 = a17 % a17;
        a16[65536] ||= 2;
        function F24(a26, a27) {
            if (!new.target) { throw 'must be called with new'; }
            this.f = v11;
            this.d = a16;
        }
        new F24(v2, 14n);
        new F24(v23, a17);
        new F24(-287022297, v2);
        return v11;
    }
}
const v31 = new C14();
const v32 = new C14();
const v33 = new C14();
function f34(a35, a36, a37, a38) {
    const o47 = {
        [C14]: 14n,
        get d() {
            const o42 = {
                "maxByteLength": 1000,
            };
            const v44 = new SharedArrayBuffer(4, o42);
            new BigUint64Array(v44);
            return a37;
        },
        "a": a38,
    };
    return o47;
}
f34(v11, v33, v32, v32);
const v49 = f34(v12, 14n, v12, v13);
const v50 = f34(v13, v2, v11, v11);
v50[14] -= v2;
function f51(a52, a53, a54) {
    const o55 = {
        8: v49,
        ...v50,
    };
    return o55;
}
f51(v11, v33, C14);
f51(C14, v11, 3n);
f51(v31, v13, v49);
