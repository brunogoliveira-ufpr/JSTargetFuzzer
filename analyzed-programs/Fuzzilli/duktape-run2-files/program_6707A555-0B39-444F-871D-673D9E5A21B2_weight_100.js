function f0() {
}
function f1() {
    const o21 = {
        get g() {
            new Float64Array(3);
            new Int32Array(10);
            function f9() {
                return Float64Array;
            }
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = a14;
            }
            new F11(Float64Array, 10);
            new F11(f1, Int32Array);
            new F11(f1, f1);
            const v20 = new Float32Array(2374);
            return v20;
        },
    };
    return o21;
}
const v22 = f1();
f1();
const v24 = f1();
const v25 = [v22,f1,v24,v22];
const v26 = [v25,v24,v25];
[v26,v24,[v22,v22,f1,v26]];
[f1];
[f0];
const v31 = [];
const v32 = [v31,v31,v31,v31];
[[v32,v32,v32,v32],812.2146569732522,[]];
("undefined").length;
v32[10] = "g";
v31.length;
for (let v41 = 0; v41 < 5; v41++) {
}
