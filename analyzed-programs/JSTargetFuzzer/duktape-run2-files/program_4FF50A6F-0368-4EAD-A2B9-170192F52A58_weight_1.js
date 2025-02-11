const v0 = [-29069,-1852285877,6,-1,-3,196616234,-9007199254740991];
const v1 = [490738264,14132,-2,25218,0,2147483649,50372,4096,-1749511649,-1525623150];
const v2 = [-347734468,-256,9007199254740990,9,-4096,256,-58994,3];
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a8;
    this.e = v2;
    this.a = a8;
}
const v10 = new F6(16, v0);
const v11 = new F6(4, F6);
const v12 = new F6(-8, 16);
function f13(a14, a15, a16, a17) {
    const o25 = {
        [a17](a19, a20) {
            super.f = a19;
            a16[a20] = a19;
            super.g = a19;
            const v22 = [a20,v2,a19,FinalizationRegistry];
            return [a15,[v0,a20,4],v12,v22];
        },
        ...v0,
        "a": a17,
        [v10]: v1,
    };
    return o25;
}
const v26 = f13(v0, 16, v1, v1);
const v27 = f13(v2, -8, v0, v0);
f13(v2, -8, v2, v2);
v27[10] = v11;
let v29 = v27[v26];
v29 >>>= v0;
let v34 = 4.0 && 902818308;
v34--;
4.0 << v29;
-902818308;
Math.ceil(v10);
