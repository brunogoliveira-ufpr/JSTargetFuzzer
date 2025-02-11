function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -749362714;
    this.b = -749362714;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o11 = {
        [v4]: F0,
        "d": v5,
        3: a7,
        "a": v4,
        "g": a7,
        "e": a7,
        2147483647: v4,
        "h": a7,
        [F0]: v4,
        "b": v3,
        set c(a9) {
            a7[this] = v4;
            let v10;
            try { v10 = a9(this, v5, v5); } catch (e) {}
            a7[a7] = v10;
        },
    };
    return o11;
}
const v12 = f6(v3);
const v13 = f6(v5);
const v14 = f6(v13);
class C15 {
    toString(a17, a18) {
        /B(?<a>(?<b>(?<c>(?<d>.).).).)/gsmiv;
        /abc+?/gsdiv;
        /WNj(ab)\xf0\x9f\x92\xa9[\c1]/si;
        const v23 = Symbol.search;
        a18[v23] = v23;
        return v12;
    }
    #f = v14;
    static {
        this[-1] = v14;
        try {
            v4.#f = this;
        } catch(e25) {
        }
    }
}
new C15();
const v27 = new C15();
const v28 = new C15();
function f29() {
    return v4;
}
function f30(a31, a32, a33, a34) {
    const o44 = {
        __proto__: a34,
        "g": v5,
        ...v4,
        "e": a34,
        set c(a36) {
            a32 = v5;
            const o39 = {
                "maxByteLength": 1000,
            };
            const v41 = new SharedArrayBuffer(1000, o39);
            new BigUint64Array(v41);
        },
    };
    return o44;
}
const v45 = f30(f30, v12, v27, v5);
const v47 = f30(f30(C15, v14, v13, v13), v12, v28, v12);
v47.c;
function f49(a50, a51) {
    v45.__proto__;
    new f6(v5.c);
    function f55() {
        return v3;
    }
    return v14;
}
f49(v12, v47);
