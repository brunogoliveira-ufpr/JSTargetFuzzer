let v1 = "128";
class C3 {
    d = v1;
    m(a5) {
        delete v1?.length;
        return 14n;
    }
    #a = v1;
    static #b;
    static #c = "bigint";
}
const v10 = new C3();
const v11 = new C3();
const v12 = new C3();
class C13 extends C3 {
    set f(a15) {
        this.toString = a15;
    }
    constructor(a20, a21, a22, a23) {
        super();
        function* f24(a25, a26, a27, a28) {
            try { a27.m(); } catch (e) {}
            v1 = a22;
            yield a22;
            return a23;
        }
        f24(f24, f24, v11, C3);
    }
}
const v32 = new C13("bigint", v10, v10, C3);
const v33 = new C13("bigint", v12, "bigint", v10);
const v34 = new C13(v33, v32, "bigint", v32);
v12 ** v11;
C13[v12] = v34;
function f36(a37) {
    return a37;
}
class C38 extends f36 {
    85;
    ["matchAll"];
}
try { v1(v34); } catch (e) {}
