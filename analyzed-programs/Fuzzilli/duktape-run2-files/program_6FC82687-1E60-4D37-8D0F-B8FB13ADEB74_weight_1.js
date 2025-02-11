new BigInt64Array(2);
new Float64Array(8);
const v8 = new Int8Array(14);
function f9() {
    return v8;
}
const v11 = new WeakSet();
const v13 = Symbol.toPrimitive;
const o23 = {
    [v13]() {
        this[BigInt64Array] = this;
        function F15(a17, a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = a18;
            this.f = v11;
        }
        new F15(14, Int8Array, 14);
        new F15(14, 8, 2);
        new F15(2, Float64Array, 14);
        return 8;
    },
};
