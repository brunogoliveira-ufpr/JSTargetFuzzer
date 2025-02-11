function f0() {
}
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = f0;
}
const v13 = new F7(10, 3, 0, 702401378);
const v14 = new F7(702401378, -4096, 0, v13);
const v15 = new F7(F7, 2782726, 10, F7);
let v16;
try { v16 = v15.subarray(-4096, v15, 10, 10, 3); } catch (e) {}
const v17 = v14 instanceof v16;
const v19 = [[0,-4096,v17,2782726],v17];
[3,0];
try { v13["setInt32"](v15); } catch (e) {}
v19.length = 1073741824;
10 % v19;
