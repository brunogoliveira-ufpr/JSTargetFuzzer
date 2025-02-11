const v1 = new Map();
const v2 = [Map,v1];
const v3 = [v2];
const v4 = [v2,v3,Map,v3,v3];
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v2;
    this.b = a7;
}
new F5(v4);
new F5(v2);
new F5(v3);
class C11 {
    static #m(a13, a14) {
        new Float64Array(248);
        const v20 = new Uint16Array(36);
        new BigUint64Array(2);
        return v20;
    }
}
new C11();
new C11();
new C11();
[] = v1;
v1 === C11;
const v28 = `
    Math.atan(v3);
    Math.sinh(56284);
    -6.248393127909592 << 56284;
    const v35 = -56284;
    Math.asinh(56284);
    v35 & -6.248393127909592;
`;
eval(v28);
