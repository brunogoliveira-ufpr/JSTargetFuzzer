let v0 = -971.351626772952;
class C6 {
    [9007199254740990] = -1000000000000.0;
    n(a8, a9, a10) {
        let v11;
        try { v11 = a8(); } catch (e) {}
        try { new v11(-1000000000000.0, 1073741825); } catch (e) {}
        return this;
    }
    static o(a14, a15) {
        function f16(a17) {
            return a17;
        }
        class C18 extends f16 {
            f = v0;
            [v0];
        }
        return this;
    }
}
const v19 = new C6();
new C6();
const v21 = new C6();
function f22(a23, a24) {
    const o31 = {
        "a": a24,
        p(a26, a27, a28) {
            let v29;
            try { v29 = new a24(a26, 9007199254740990); } catch (e) {}
            function f30() {
                return v29;
            }
            return v21;
        },
        [a24]: a24,
        "c": a24,
        "e": v21,
        1: v21,
        __proto__: v19,
    };
    return o31;
}
f22(-1000000000000.0, C6);
const v33 = f22(1.0, v0);
f22(v0, f22);
const t42 = 1.0;
t42[4] = -1000000000000.0;
v0 = 1.0;
try {
    Uint32Array instanceof Uint32Array;
} finally {
    Object.defineProperty(v33, 512, { writable: true, enumerable: true, get: f22, set: f22 });
}
function f37() {
    return 9007199254740990;
}
