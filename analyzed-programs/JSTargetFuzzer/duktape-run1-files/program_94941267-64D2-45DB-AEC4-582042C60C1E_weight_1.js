class C3 {
    g;
    get h() {
        const t3 = 0.4797017536118984;
        t3[5] = this;
        const t5 = "getUTCDate";
        t5[this] = "n";
        new Date();
        return Date;
    }
    ["getUTCDate"] = 0.4797017536118984;
    c;
    ["n"];
}
const v7 = new C3();
new C3();
const v9 = new C3();
const v10 = [v9,"n",v9,"getUTCDate"];
const v11 = [v10];
const v12 = [v11,0.4797017536118984,"getUTCDate",v7,v11];
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a16;
}
const v17 = new F13(v9, v10);
const v18 = new F13(v7, v12);
const v19 = new F13(v7, v18);
const v21 = new WeakSet();
v21[10] = v19;
let v23;
try { v23 = v19["n"](v9); } catch (e) {}
function F24(a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a27;
    this.h = WeakSet;
    this.c = WeakSet;
}
new F24(v17, "n");
new F24(v18, v23);
new F24(v19, "n");
