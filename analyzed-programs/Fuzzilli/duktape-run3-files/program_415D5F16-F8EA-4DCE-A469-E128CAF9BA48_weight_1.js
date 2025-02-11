function f0() {
    const o13 = {
        valueOf(a5, a6) {
            try { new a5("g", a6, a6); } catch (e) {}
            return "g";
        },
        set c(a9) {
            try { ("g").endsWith("g", a9); } catch (e) {}
            this.__proto__;
            a9?.[129];
        },
        ["g"]: "g",
        __proto__: "g",
    };
    return o13;
}
const v14 = f0();
const v15 = f0();
const v16 = f0();
const v17 = [f0,f0,v16,f0];
[v16,v17,f0,[v16,v14,v15,f0,v17],v15];
[-1,-11,7,-2147483648,536870888];
const v21 = [2];
const v22 = [-14,900,-2147483648,-65535,-5,-65537,-2,1024];
let v26 = 0;
while (v26 < 7) {
    const v29 = f0();
    v21[v22] &= v26;
    const v30 = v29 >> v15;
    try { v21.fill(v30, ...v17, v16, ...v29); } catch (e) {}
    v26++;
}
