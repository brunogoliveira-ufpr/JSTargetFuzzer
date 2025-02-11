const v0 = [1.2590934246673997e+308,1.0,-1000000.0,745387.1874681194];
const v1 = [0.080426742687284,NaN,1000.0,1.7123180173324645e+308,-1.7976931348623157e+308];
const v2 = [6.29612506209255,9.019706356035682e+307,1000000000000.0,859.4117436475126,Infinity,-2.496598288311489,-1000000000.0,0.6290784382553265,-2.220446049250313e-16];
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a11;
}
new F9(v2, "e", v1, F9);
new F9(v1, "e", v1, v1);
const v17 = new F9(v1, "d", v1, v0);
const o23 = {
    ["growable"](a19, a20) {
        try {
            super.asIntN("bigint");
        } catch(e22) {
        }
        return this;
    },
};
o23[v0] = v17;
