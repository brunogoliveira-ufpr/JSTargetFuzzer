function f3() {
    return -65535;
}
function f4() {
    return f3;
}
function f5(a6, a7) {
    const o15 = {
        "h": a6,
        m(a9, a10, a11) {
            return a9;
        },
        "g": a7,
        "b": f3,
        "f": f3,
        "e": f4,
        "a": f4,
    };
    return o15;
}
f5(-65535, f5(3, -65535));
f5(-65535, 3);
new Int16Array(998);
new Uint32Array(255);
const v30 = new Float64Array(3);
[3];
[Uint32Array,[v30,Int16Array,Int16Array,3,v30],998,998];
const t25 = 3;
t25[4] = ("bigint")["p"];
const o38 = {
};
new Proxy(Int16Array, o38);
const t32 = "MAX_SAFE_INTEGER";
t32.length &&= 512;
