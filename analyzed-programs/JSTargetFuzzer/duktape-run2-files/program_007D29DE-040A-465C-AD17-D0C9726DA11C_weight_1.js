function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 2;
    this.e = 255;
}
const v7 = new F3(255, 255);
let v8 = new F3(7, 7);
v8[v8] = F3;
v8[3] = 7;
try {
const t0 = 7;
t0(v8, v7, 2, 255);
} catch (e) {}
++v8;
v7.c;
const v12 = new F3(2, 255);
const v13 = [v12,v7];
[v12,255,v13,v13,v13];
[v8,v8,v13];
new Float32Array(1000);
const v27 = new Int32Array(Int32Array);
const v30 = new Int16Array(3144);
const v34 = -1 >> v30;
let v35;
try { v35 = Int16Array(v34, 1000, 3144); } catch (e) {}
v27.byteOffset;
switch (0.01413596778607562) {
    case -1.7976931348623157e+308:
        try { v35(); } catch (e) {}
        break;
    default:
        v30.byteOffset;
        break;
}
