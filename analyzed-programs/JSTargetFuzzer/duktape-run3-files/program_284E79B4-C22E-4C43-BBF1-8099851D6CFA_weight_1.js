function f3(a4) {
    const o10 = {
        __proto__: a4,
        ...a4,
        "d": a4,
        toString(a6) {
            a4.h += -9007199254740990;
            let v7;
            try { v7 = a6(a6); } catch (e) {}
            try {
                super.reject(this, 257, this, a4, v7);
            } catch(e9) {
            }
            return a4;
        },
        ...a4,
        2147483648: 255,
    };
    return o10;
}
const v11 = f3(255);
const v12 = f3(255);
const v13 = f3(v12);
[257,v11,v13,257];
const v18 = [255,-9007199254740990,"3f"];
[v18,v11,v12];
function f23() {
    return 65536;
}
[-9007199254740990,v13,f23,v18,v18];
const v26 = [v13,["m",38997,"3f",v18,v18]];
v26[10] = v26;
f23();
