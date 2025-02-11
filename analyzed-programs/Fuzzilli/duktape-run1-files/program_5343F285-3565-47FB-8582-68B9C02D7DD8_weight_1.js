function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 1073741825;
}
const v3 = new F0();
new F0();
const v5 = new F0();
const v6 = [v5];
const v7 = [v5];
[v5,F0,v5,v7,v7];
class C9 extends F0 {
    o(a11, a12, a13) {
        new Float32Array(6);
        new BigUint64Array(2343);
        new Int16Array(257);
        return a11;
    }
}
new C9();
const v24 = new C9();
let v25 = new C9();
v25 ||= v25;
const v26 = [v24];
const v27 = [v3,v6,v6,v3];
[F0];
const v32 = v26.__proto__;
v27 ** C9;
v27.length >>>= v32;
