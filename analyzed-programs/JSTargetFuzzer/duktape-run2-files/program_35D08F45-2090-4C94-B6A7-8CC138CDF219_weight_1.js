const v0 = /5Zu/gydv;
const v1 = /5ca\w/svi;
const v2 = /n/vi;
let v3 = "prototype";
let v5 = "number";
const v7 = new Set();
class C8 extends Set {
    static #d = "fclG";
    static 3;
    f;
    static [v3] = "fclG";
    [Set];
    constructor(a10, a11, a12, a13) {
        super(a10);
        v5 = v3;
    }
    g;
    #e;
    e = v7;
    a = "fclG";
}
const v14 = new C8(v5, v3, v5, v1);
const v15 = new C8(v5, v5, "fclG", v1);
const v16 = new C8(v5, v5, "fclG", v2);
function F17(a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v15;
}
new F17(v3, v5, v7);
new F17(v3, "fclG", v7);
const v24 = new F17(v5, v3, v16);
const v25 = delete v14[v24];
try { v15(v16, v25, v5, v0); } catch (e) {}
let v27 = 0;
do {
    v3 = v5;
    let v29 = 9007199254740992;
    let v31 = ~"fclG";
    v29++;
    --v31;
    v27++;
} while (v27 < 2)
