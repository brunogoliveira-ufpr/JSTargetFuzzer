const v1 = new Map();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a5;
    this.c = v1;
}
const v6 = new F2(v1, Map);
new F2(v6, v6);
new F2(v6, Map);
const v10 = new Date();
function f11() {
    return v10;
}
try { f11(...v1, f11, ...v1, ...Map, ...Date, f11); } catch (e) {}
let v17 = 1685095875;
const v18 = v17--;
Math.hypot(v18);
-v10;
const v21 = Math.log(v10);
v18 >> v10;
Date(v21);
Object.defineProperty(v1, F2, { writable: true, enumerable: true, value: v18 });
