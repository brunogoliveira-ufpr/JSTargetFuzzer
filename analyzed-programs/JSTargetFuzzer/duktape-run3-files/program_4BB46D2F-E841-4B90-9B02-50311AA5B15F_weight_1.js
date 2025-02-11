function f0() {
}
class C1 extends f0 {
    static c = f0;
    static [f0];
    static a;
    #p() {
        let {"a":v3,"d":v4,"f":v5,} = this;
        v4.length = 14;
        return 14;
    }
    static b = f0;
}
const v7 = new C1();
const v8 = new C1();
const v9 = new C1();
let v11 = 741776582;
if (C1) {
    [C1] = v11;
} else {
    let v16;
    try { v16 = v8.n(1060488955, C1, v11, v9); } catch (e) {}
    v11 = v16;
    const v17 = [v16,v16,v7];
    [[v17,v9,v16,f0,v11],v17,v11,v17];
}
