function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = "f";
}
new F9("object", "object", "-2147483649");
new F9("f", "f", "-2147483649");
const v16 = new F9("object", "f", "f");
h = v16;
const v17 = -65536 && "f";
function* f18(a19, a20) {
    a19 &&= "f";
    a20.length;
    yield* "object";
    return v17;
}
f18(-29923, "-2147483649");
