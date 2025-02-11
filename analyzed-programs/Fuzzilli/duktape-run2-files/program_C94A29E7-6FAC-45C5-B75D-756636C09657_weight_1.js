function f6() {
    return "__proto__";
}
[16,2147483648];
const v11 = [1000];
const v12 = [3,54387,54536,1073741824,-9007199254740990,2147483648];
function f13(a14, a15) {
    a14.length &&= -4294967297;
    function F16(a18, a19) {
        if (!new.target) { throw 'must be called with new'; }
        this.e = a19;
        this.h = "__proto__";
    }
    new F16(a14, -256);
    const v21 = new F16("__proto__", v11);
    new F16("-15", v12);
    return v21;
}
f13("-15", "__proto__");
