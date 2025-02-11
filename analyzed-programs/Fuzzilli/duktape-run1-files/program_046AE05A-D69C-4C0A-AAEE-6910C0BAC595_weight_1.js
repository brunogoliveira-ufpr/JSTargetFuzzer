let v1 = -32649;
function f3(a4, a5) {
    const o10 = {
        get g() {
            let v8 = Symbol.unscopables;
            const v9 = this[v8];
            v8 -= this;
            return v9;
        },
        "d": -9223372036854775808,
        "e": a4,
        __proto__: a4,
        "h": -9223372036854775808,
        "a": a4,
        4: a4,
        "b": 4294967296,
    };
    return o10;
}
const v11 = f3(-9223372036854775808, 4294967296);
const v12 = f3(4294967296, v1);
const v13 = f3(4294967296, 4294967296);
class C14 {
    static n(a16, a17, a18, a19) {
        [v12,a18,a17];
        [4294967296];
        const v22 = [v11,v11];
        try { this.allSettled(v13, v22, -9223372036854775808, this, v22); } catch (e) {}
        let v25 = 268435439;
        --v25;
        v1--;
        v25 ** 4.0;
        a16 || v25;
        return Math.clz32(v1);
    }
}
const v32 = new C14();
const v33 = new C14();
const v34 = new C14();
class C35 extends C14 {
    static [v33] = v11;
    #o(a37, a38, a39, a40) {
        a39 > a38;
        Object.defineProperty(v32, v33, { writable: true, configurable: true, enumerable: true, get: f3, set: f3 });
        this[0] = a40;
        Object.defineProperty(a38, 58, { get: f3 });
        !C14;
        return v12;
    }
    static #d;
    static #f;
}
new C35();
new C35();
const v48 = new C35();
let v50 = -52451;
const v51 = v50--;
const v52 = Math.exp(v50);
let v53 = Math.hypot(v33);
Object.defineProperty(v48, "c", { writable: true, configurable: true, get: f3, set: f3 });
Object.defineProperty(v34, C35, { writable: true, configurable: true, enumerable: true, get: f3, set: f3 });
new f3(v52, v53 = v51);
v13.b;
