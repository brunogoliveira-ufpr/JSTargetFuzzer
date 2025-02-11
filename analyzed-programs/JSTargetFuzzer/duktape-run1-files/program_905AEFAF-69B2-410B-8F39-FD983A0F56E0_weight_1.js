function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -1950949949;
    this.e = -1950949949;
    this.d = -1950949949;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a9;
    this.d = a8;
    this.c = F0;
}
const v10 = new F6(v5, v3);
const v11 = new F6(v3, v3);
const v12 = new F6(v5, v5);
class C13 {
    get a() {
        let v15;
        try { v15 = this(); } catch (e) {}
        let [] = v15;
        const v16 = [v3,F6,v12,v3];
        [v10,v11];
        [v15,v16,v12,v3];
        return v4;
    }
    static [F0] = v10;
    g;
}
new C13();
const v20 = new C13();
let v21 = new C13();
function f22() {
    return v11;
}
C13.d = f22;
[NaN,0.5196730133825184,NaN,0.2966881548201741,-1000000000.0,41427.51831358904,584116.5980639532];
[1000.0,6.784690160675304e+307,0.46365298692523926,1000.0];
[0.031608972492186305,-1e-15,239418.30345036904,5.0,-1.4412267079282304e+308,-5.0,801.439310617824,0.6050840426350509,0.0515882247885201];
C13.toString = f22;
v21 = v20;
