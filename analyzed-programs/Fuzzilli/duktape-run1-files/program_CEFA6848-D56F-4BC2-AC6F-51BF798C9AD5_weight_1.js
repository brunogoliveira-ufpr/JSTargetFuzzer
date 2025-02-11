class C3 {
    constructor(a5, a6) {
        a5 >> this;
        a6[0] = -1 in this;
        let {"f":v9,"g":v10,"h":v11,...v12} = this;
        super.f = v9;
    }
    get f() {
        let v14;
        try { v14 = this.p(-1, -1024, this); } catch (e) {}
        return v14;
    }
}
const v18 = new C3(9007199254740992, -1024);
const v19 = new C3(-1024, -1024);
const v20 = new C3(-1, -1);
let v27;
try { v27 = ("object").toLowerCase(); } catch (e) {}
function F28(a30, a31, a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = "length";
}
new F28(v19, 9007199254740992, 9007199254740992, -58827);
new F28(v18, -4294967297, v27, 9007199254740992);
const v36 = new F28(v20, -4294967297, 9007199254740992, -1024);
v36.__proto__ = v20;
v18[v18 >>> 9007199254740992];
