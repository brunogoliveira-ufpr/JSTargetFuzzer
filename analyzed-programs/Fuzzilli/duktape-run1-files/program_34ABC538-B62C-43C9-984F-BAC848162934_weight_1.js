const v0 = [2.8822025719831785];
const v1 = [2.220446049250313e-16,4.1044059541363636e+307,46.78428406486796];
const v2 = [3.0];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v2;
    this.c = a6;
    this.d = a5;
}
const v7 = new F3(v2, v1);
const v8 = new F3(v1, v2);
const v9 = new F3(v7, v8);
const v10 = [-8117,-1063150680,-2107953967,-57222,15,9,-7492,-6,-4294967295,-22089];
const v11 = [268435440,64,-4294967296,14940,417482923];
const v12 = [-2,-31914,-4096,129,-128,2147483648,2147483647,1242308889];
function f13(a14, a15, a16) {
    const o29 = {
        "d": v11,
        set g(a18) {
            [1934366930,7056,536870889,2008949524,512,-4096,1750241598,24675];
            [28459,9463,-128];
            const v21 = [-1024,2,9,1024,-302693651,-4294967295,-2,6,-44039,40041];
            const v22 = super.g;
            try { new v22(v21, v10); } catch (e) {}
        },
        set b(a25) {
            const t26 = "xf5U";
            t26.g = this;
        },
    };
    return o29;
}
const v30 = f13(v0, v7, v2);
const v31 = f13(v2, v7, v12);
const v32 = f13(v12, v9, v10);
let v33;
try { v33 = v32.valueOf(v8, v30, v11, v32); } catch (e) {}
delete v32[v11];
const v35 = v1.length;
v1.__proto__ = v33;
Math.cosh(v31);
let v43 = v31 & v35;
!v43;
++v43;
