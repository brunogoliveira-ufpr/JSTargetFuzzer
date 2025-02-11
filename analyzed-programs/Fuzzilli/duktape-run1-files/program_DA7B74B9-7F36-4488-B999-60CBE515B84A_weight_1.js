const v0 = [582877761,321703272,536870888,-65535,2147483647,-12,8,-42570];
[-1746088273,-12,127,6,2147483647,-873008838,1073741824,268435441,-2,128];
[-4294967297,15,-1073741824,-21774,1932059730,-250093027,5,-55909];
let v5 = 1;
class C6 {
    get b() {
        const v8 = this * this;
        v5 = v8;
        let v9;
        try { v9 = v8(this, 9007199254740991, 9007199254740991); } catch (e) {}
        super.e **= v9;
        Object.defineProperty(v0, "length", { writable: true, configurable: true, value: v8 });
        return this[9007199254740991];
    }
    p(a12, a13, a14, a15) {
        this % this;
        ~a15;
        const v18 = `
            a14.__proto__ = a14;
        `;
        eval(v18);
        return v0;
    }
}
const v24 = new C6();
const v25 = new C6();
new C6();
new Float32Array(3);
new Uint8ClampedArray(12);
new Uint16Array(128);
const v36 = v0.length;
v24[Symbol.iterator] = v36;
function F39(a41, a42) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a41;
}
new F39(v0, v25);
new F39(v0, C6);
new F39(v0, v24);
