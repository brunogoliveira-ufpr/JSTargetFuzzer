new Int8Array(16);
new Uint32Array(257);
new BigUint64Array(83);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a12;
}
new F9(83, 16, 83);
new F9(83, 16, 257);
const v16 = new F9(16, 16, 16);
const v17 = [1000000.0,-2.0,1.549374845625012e+307,198.08145788020124,-1.0,0.0,0.8239705533819137,1.3507648413414923,5.0,1e-15];
const v18 = [-1.0,254755.7489076273,-5.0,-2.220446049250313e-16,1000000000000.0,0.24504627596010575];
[0.9714574615314683,5.0,1.7976931348623157e+308];
const v20 = (a21, a22, a23, a24) => {
    async function* f25(a26, a27) {
        a22 = v17;
        a27[v18] = a27;
        await a26;
        yield* v18;
        return v16;
    }
    f25(a22, v17);
    return Uint32Array;
};
