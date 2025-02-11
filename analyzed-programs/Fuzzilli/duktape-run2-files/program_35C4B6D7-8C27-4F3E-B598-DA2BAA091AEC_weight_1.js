const v5 = new Array(0);
function f9(a10, a11, a12, a13) {
    const o26 = {
        "h": a10,
        set a(a15) {
            super.a = a11;
            Object.defineProperty(v5, 268435439, { configurable: true, set: Array });
            const v16 = `
                function F17(a19, a20) {
                    if (!new.target) { throw 'must be called with new'; }
                    this.d = 38932;
                }
                new F17(a12, -14);
                new F17(a12, F17);
                new F17(-4294967295, F17);
            `;
            eval(v16);
        },
    };
    return o26;
}
const v27 = f9(-14, -14, 5, 128);
const v28 = f9(128, Array, 5, -4294967295);
const v29 = f9(0, v28, -4294967295, 0);
let v32 = 4294967295;
v32 *= 4294967295;
const v37 = Symbol.match;
v5[v37];
v27[1326] = v28;
[3.0,f9,v27,7,[v29,-4294967295,0.28079376590265603]];
[v29,f9,v37,-4294967295];
