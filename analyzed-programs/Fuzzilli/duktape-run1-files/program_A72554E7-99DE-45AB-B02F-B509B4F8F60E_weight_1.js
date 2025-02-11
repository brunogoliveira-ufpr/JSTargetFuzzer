const v5 = new Int16Array(3);
new Uint8Array(144);
const v11 = new BigUint64Array(1);
const v13 = [Int16Array,v5];
Reflect.apply(v5.forEach, v11, v13);
let v16 = 0;
while (v16 < 3) {
    function F19(a21, a22) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = v11;
        this.d = a22;
    }
    new F19(v16, -16);
    new F19(v16, 144);
    new F19(144, -65537);
    v16++;
}
