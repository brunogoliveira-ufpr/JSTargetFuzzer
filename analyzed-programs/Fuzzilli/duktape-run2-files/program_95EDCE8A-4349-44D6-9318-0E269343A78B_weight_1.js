class C3 {
    static {
        const t2 = "boolean";
        t2[this] = this;
        const v5 = +this;
        function f6(a7, a8) {
            const o9 = {
                [279132.9059792422]: 2.2250738585072014e-308,
                "b": 2.2250738585072014e-308,
                __proto__: this,
            };
            return o9;
        }
        const v10 = f6(v5, v5);
        f6(v10, v10);
        f6(v10, f6);
    }
}
new C3();
new C3();
const v15 = new C3();
const v19 = [-1,256];
const v20 = [5,-4294967295];
let v21 = [-65535,13213,9007199254740990,4,0,7,-268435456];
for (const v22 of v21) {
    try { ("boolean").localeCompare(v22, v22, C3); } catch (e) {}
}
v20.length;
with (v21) {
    length = v15;
    for (let i27 = 0, i28 = 10; i27 < i28; i27++, i28--) {
        v21 = v19;
    }
}
