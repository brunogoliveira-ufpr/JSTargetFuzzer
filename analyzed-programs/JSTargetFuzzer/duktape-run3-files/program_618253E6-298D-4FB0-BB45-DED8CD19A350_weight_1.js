const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v0;
}
new F1();
new F1();
new F1();
[-901551.7617596751,794.17003376138,-4.668390494635998,4.0];
const v7 = [0.1624439222212256,2.784947287918399];
const v8 = [-1000000000.0,0.4364372713041259,-Infinity,0.25164674499620165,-1000000000.0];
class C9 {
    #c;
    [v8] = v0;
    4294967296;
    o(a11, a12) {
        let v14;
        try { v14 = a12["p"](); } catch (e) {}
        try {
            super.o("p", v14, this);
        } catch(e16) {
        }
        return a11;
    }
}
new C9();
new C9();
const v19 = new C9();
let v20;
try { v20 = v19(v7); } catch (e) {}
let v21 = 10;
for (; v21--;) {
    let v23;
    try { v23 = v20(v19); } catch (e) {}
    v19.toString = v23;
}
