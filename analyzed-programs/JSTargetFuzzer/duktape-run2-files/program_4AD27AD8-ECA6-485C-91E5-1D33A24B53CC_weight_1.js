function f0() {
    const o16 = {
        valueOf(a5) {
            this & Duktape.gc;
            ("MAX_SAFE_INTEGER").length;
            this.toString = Duktape.gc;
            return "MAX_SAFE_INTEGER";
        },
        [1024]: 1024,
        ["MAX_SAFE_INTEGER"](a10, a11) {
            let v12;
            try { v12 = this.valueOf(1024, "lMPT", a10, this); } catch (e) {}
            Object.defineProperty("MAX_SAFE_INTEGER", -2, { configurable: true, enumerable: true, value: v12 });
            [208.20697829410892,1000000000000.0];
            [1000.0,-1.788309191586175e+308];
            [-2.220446049250313e-16,NaN,-1000.0,8.340152217301423,1.0453466355044525e+308];
            return a11;
        },
    };
    return o16;
}
const v17 = f0();
const v18 = f0();
const v19 = f0();
function f20(a21) {
    const o24 = {
        "h": v19,
        "f": v18,
        "d": v17,
        [a21]: v18,
        "a": v19,
        "c": v17,
        2147483649: v18,
        "e": v18,
        "g": a21,
        get b() {
            this.__proto__;
            this[this] = v17;
            return a21;
        },
    };
    return o24;
}
const v25 = f20(v17);
const v26 = f20(v18);
const v27 = f20(v18);
class C31 extends f20 {
    b;
    set f(a33) {
        super.b = this;
        try { v27["n"](a33); } catch (e) {}
        [8,v19,..."n",a33];
        delete v27[v25];
        [-32753,-15];
        [9007199254740990,-135876079,127,2,9223372036854775807,-4402,10000,1017580353,-2147483648,-1635308194];
        [65537,1073741824,65535];
    }
    static b = v25;
    [v25];
    #a = v18;
}
new C31();
new C31();
new C31();
function f44(a45, a46, a47) {
    try { v25["toString"](v26, "toString", a47, 8); } catch (e) {}
    return a46;
}
f44(8, 8, 8);
Object.defineProperty(C31, "h", { configurable: true, enumerable: true, set: f20 });
