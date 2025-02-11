function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -65535;
}
new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [1000.0,1000000000.0,0.4467345209209306];
const v7 = [1000000000000.0,-114818.35706060135,5.0,5.820891583999055e+307];
const v8 = [-1000.0,5.0,-1000000000.0,0.9228869572736891,1.7315125203222743e+308];
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a11;
    this.a = v8;
}
const v13 = new F9(v6, v4);
new F9(v7, v4);
new F9(v8, v5);
const v16 = v13 instanceof F0;
function f17() {
    return v16;
}
v13[v5];
delete v13[F0];
new WeakMap();
v6 | null;
