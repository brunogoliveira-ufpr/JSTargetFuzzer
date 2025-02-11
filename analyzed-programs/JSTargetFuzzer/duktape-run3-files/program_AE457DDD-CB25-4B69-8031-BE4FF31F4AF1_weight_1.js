function f0() {
}
const v3 = new Array(1235);
const o4 = {
};
new Proxy(f0, o4);
let v9 = f0 & o4;
const v10 = ~o4;
++v9;
v9 && v10;
function f16(a17, a18) {
    const o19 = {
        "d": a17,
        "f": "5",
        "h": f0,
        __proto__: a17,
        "a": "8",
        [a18]: v3,
        ["sticky"]: a18,
        "g": a18,
        "e": v3,
        "b": a17,
        "c": a17,
    };
    return o19;
}
f16("8", "5");
f16("5", "sticky");
f16("5", "5");
function F35(a37, a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 831213088;
    this.c = -762451292;
    this.d = 10000;
}
const v40 = new F35(64, 64, -1.3486461244335136e+307);
new F35(64, -62221, -1.3486461244335136e+307);
new F35(-62088, 4294967297, -1.3486461244335136e+307);
v40[1024] = -877.9371151192076;
