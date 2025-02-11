function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a5;
    this.d = a5;
}
new F3(536870912);
new F3(1519604840);
new F3(-38558);
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a16;
}
const v17 = new F12();
const v18 = new F12(20087, 20087, v17);
v18.h >>= -2;
const v27 = [0.6174342204332062,1.7976931348623157e+308,-0.0,-1.092245914276891e+308];
const v28 = [5.0,-503.2436740557566];
const v29 = [-1000000.0,1000000000000.0,NaN,867.672258375783];
let v33 = 0;
while (v33 < 4) {
    const t20 = -9223372036854775807;
    t20[4] = v28;
    function F36(a38, a39, a40) {
        if (!new.target) { throw 'must be called with new'; }
        this.g = v29;
        this.f = -9223372036854775807;
        this.h = 8;
    }
    new F36(-9223372036854775807, -9007199254740991, v29);
    new F36(-9223372036854775807, -9223372036854775807, v27);
    new F36(1725859146, 4294967297, v27);
    v33++;
}
