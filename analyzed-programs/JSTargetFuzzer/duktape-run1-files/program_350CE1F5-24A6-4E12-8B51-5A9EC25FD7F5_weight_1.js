const v0 = [8,-1382342964];
const v1 = [1330545593,479686424,65536];
const v2 = [6782,268435439,2147483648,65537,-22622,128];
let v3 = [v0,v0,v1,v1];
const v4 = [v2,v2];
const v5 = [v2,v1,v2,v2,v4];
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v3;
    this.a = a8;
}
const v11 = new F6(v0, v3, v2);
const v12 = new F6(v1, v5, v4);
const v13 = new F6(v0, v12, v3);
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a17;
    this.e = a17;
    this.d = a16;
}
const v18 = new F14(v13, v1);
new F14(v18, v2);
new F14(v4, v4);
v11.c = v4;
const v21 = v3.length;
const o22 = {
    "a": v0,
};
v3 &&= v5;
let [v23,v24,v25,...v26] = v0;
v13.__proto__;
v2.length = v21;
try { v3.copyWithin(v21, v26, v24); } catch (e) {}
