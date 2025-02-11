function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -536870912;
    this.a = -536870912;
    this.h = -536870912;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v7 = new Date();
function f8(a9, a10, a11) {
    const o19 = {
        get d() {
            let v13;
            try { v13 = this.setFloat32(v7, a11, v4); } catch (e) {}
            const v14 = delete v3[a10];
            v13[2] = v14;
            return v14;
        },
        65535: Date,
        p(a16, a17) {
            try { v4(); } catch (e) {}
            return a10;
        },
        "b": a9,
        "h": a9,
    };
    return o19;
}
f8(Date, v5, v4);
f8(v3, v5, v7);
f8(v7, v7, v5);
const v26 = [-35406,-128,268435439];
const v27 = [-7648,-56818,16,4,1007569727,4];
const v28 = [-2];
let v29 = [v26];
const v30 = [v28,v29,v28,v28];
[v27];
new Float32Array(164);
new Int16Array(512);
new Uint16Array(11);
let v44 = 0;
do {
    2.50552314384502e+306 in v30;
    v29 &= v30;
    v27[2974113795] ||= v44;
    v44++;
} while (v44 < 2)
