function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 268435456;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    constructor(a8, a9) {
        super();
        a9 ** a8;
        v3.__proto__ = v4;
    }
    #valueOf(a12, a13) {
        this.f %= delete a13[1];
        return F0;
    }
    b = v4;
    #c;
}
new C6(v5, v5);
const v16 = new C6(v3, v4);
const v17 = new C6(v16, v5);
[-1000000000000.0,1.5030663243094152e+307,-5.0,1.3414008086883718e+308,4.0];
[0.4467467522854299,1.0,-0.6952672613584774,1000000000000.0,703921.8626770449,0.6592877898507793];
[1.4683120976376621e+308,0.7136697475179211,2.220446049250313e-16,1000.0,0.8449372198958419,1.327422099997215e+308,0.9309564768130016,860.952591835065,-977.9622273298634,535.7831460506852];
v5 instanceof F0;
const t23 = C6[1116659886];
delete t23?.[92];
for (let v27 = 0; v27 < 32; v27++) {
    v17["p" + v27] = v27;
}
v4 + v5;
function f31() {
    return F0;
}
