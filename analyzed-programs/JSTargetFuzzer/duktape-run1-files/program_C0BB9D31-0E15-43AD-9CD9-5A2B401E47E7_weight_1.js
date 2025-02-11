function f0() {
}
function f1() {
    return f0;
}
function f2() {
    return f1;
}
class C6 extends f2 {
    constructor(a8, a9, a10, a11) {
        super();
        a8[a11 ^ this] = 34873;
    }
    [34086] = 34086;
    2;
    static #b = 34873;
    static [f1];
    [f1] = f2;
}
const v13 = new C6(34873, 34873, 34086, 34873);
const v14 = new C6(f2, -498245157, 34873, 34873);
new C6(v14, 34873, 34873, -498245157);
const v16 = `sticky${f0}P${f0}8${v13}string${f2}p`;
if (f1) {
    Object.defineProperty(v16, "length", { set: f1 });
} else {
    v13[-2];
    v14.a;
}
