function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -14879;
    this.h = -14879;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
[1.0];
[1000000000000.0,5.0,1e-15,6.579912522406659,-548.7721495006047,-1000000000.0,6.804781435654414e+307,-119589.02813790704,1.0];
const v11 = [1.7976931348623157e+308,-578.3728409934283];
function f12(a13, a14) {
    const o27 = {
        28: a14,
        __proto__: v11,
        "e": v3,
        ...v5,
        [v5](a16, a17) {
            super.e = a17;
            new Float64Array(127);
            new Int32Array(30);
            new Uint16Array(2400);
            return a13;
        },
    };
    return o27;
}
const v28 = f12("buffer", v5);
const v29 = f12("undefined", v5);
const v30 = f12("buffer", v4);
let v31 = 0;
do {
    v28[7] = v5;
    v11[169] += v31;
    function F32(a34, a35, a36, a37) {
        if (!new.target) { throw 'must be called with new'; }
        this.d = "undefined";
    }
    new F32(v29, v29, v30, "buffer");
    new F32(v28, v29, v28, "buffer");
    new F32(v29, v29, v30, "buffer");
    v31++;
} while (v31 < 10)
