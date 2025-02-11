function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a6;
    this.c = 514689530;
    this.e = a5;
}
new F3(1000, -7);
const v8 = new F3(-7, F3);
const v9 = new F3(1000, -7);
function f10(a11, a12, a13) {
    const o28 = {
        __proto__: v8,
        set c(a15) {
            let [v16,,v17,...v18] = a15;
            const v19 = v16 && v8;
            Object.defineProperty(v19, "f", { configurable: true, enumerable: true, value: v19 });
            const v22 = -Infinity;
            const v23 = !-4294967296;
            Math.log1p(-4294967296);
            v22 + (v23 & -4294967296);
            -v22;
        },
    };
    return o28;
}
f10(v8, 514689530, v9);
f10(v8, 514689530, v8);
f10(v8, 1000, v9);
function f35() {
    return 1000;
}
new f35();
delete v9[4294967295];
const v41 = ("byteOffset").length;
new F3(v41, "now", ..."byteOffset", ..."byteOffset", v41, v41);
