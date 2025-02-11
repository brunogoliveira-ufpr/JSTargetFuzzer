class C3 {
    static #n(a5, a6) {
        const o7 = {
        };
        const v9 = new Proxy(this, o7);
        let v10 = super.e;
        1073741825 ^ v9;
        return v10 = 1073741825;
    }
    [2] = -1000000.0;
    static #c = -1000000.0;
    static #h;
}
const v12 = new C3();
const v13 = new C3();
const v14 = new C3();
class C15 extends C3 {
    static #d;
    [v14];
    n(a17, a18) {
        try {
            this.#d += this;
        } catch(e19) {
        }
        return 1073741825;
    }
    188 = v14;
    #e;
    static 13;
    #b = v14;
}
const v20 = new C15();
const v21 = new C15();
const v22 = new C15();
function f23(a24, a25, a26) {
    const o39 = {
        set f(a28) {
            let v29;
            try { v29 = this.valueOf(C15, v20); } catch (e) {}
            C15 = a24;
            function F30(a32, a33, a34, a35) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = C15;
                this.b = a26;
                this.a = a35;
            }
            const v36 = new F30(v22, F30, v20, v12);
            new F30(v29, v13, a25, v20);
            new F30(v14, 2, v36, v20);
        },
        __proto__: a24,
    };
    return o39;
}
const v41 = f23(v22, f23(v21, -1000000.0, v20), C3);
C15[v14] = f23(C3, v41, v41);
let v43 = 0;
while (v43 < 5) {
    function F46(a48, a49, a50) {
        if (!new.target) { throw 'must be called with new'; }
        this.f = a49;
        this.e = v21;
        this.g = v22;
    }
    const v51 = new F46(v21, v12, v14);
    const v52 = new F46(v51, F46, C15);
    new F46(v20, v52, v52);
    v43++;
}
