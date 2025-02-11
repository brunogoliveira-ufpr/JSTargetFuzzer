let v0 = [];
function f1() {
    const o10 = {
        __proto__: v0,
        get g() {
            try { v0(v0, this, this); } catch (e) {}
            let v6 = 1073741823;
            ~v0;
            --v0;
            return v6++;
        },
        "b": v0,
        "g": v0,
        "c": v0,
        "a": v0,
    };
    return o10;
}
f1();
f1();
const v13 = f1();
const v16 = new Array(5);
const v17 = [268435441,-10,53931,-9007199254740992,128,1557654089,-65535,-1904844154];
const v18 = [4294967296,28868,-14261,2147483647,9007199254740990,2147483648];
const v19 = [9223372036854775807,65537,-2,1558741525,127,43338010,-9007199254740992,-14];
function F20(a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a24;
}
const v25 = new F20(v16, v17, v16);
new F20(v17, v16, v19);
const v27 = new F20(v17, v0, v18);
f1();
Array.__proto__ = v13;
for (let v29 = 0; v29 < 32; v29++) {
    v27["p" + v29] = v29;
}
try { Array.from(v25, f1, v18); } catch (e) {}
v17[3] = v16;
function f33() {
    return 5;
}
