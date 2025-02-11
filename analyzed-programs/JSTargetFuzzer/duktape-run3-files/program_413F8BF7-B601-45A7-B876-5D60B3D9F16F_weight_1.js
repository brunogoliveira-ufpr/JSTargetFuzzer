let v1 = 268435441;
class C3 {
    m(a5, a6) {
        super.a = a5;
        let v7;
        try { v7 = ("stack").matchAll(a6); } catch (e) {}
        const v8 = -"global";
        const t6 = "global";
        t6[a6] = v7;
        return v1 = v8;
    }
    #g = v1;
    constructor(a11, a12) {
        Object.defineProperty(a11, 13, { configurable: true, enumerable: true, value: "stack" });
        let v13;
        try { v13 = a11.o(a11, a11, "global"); } catch (e) {}
        try { a12("stack", v13, v13, "global", v13); } catch (e) {}
        [v1,"global",v13,a12,["stack",v13,this,[v13,this,a11,v1]]];
    }
}
const v19 = new C3(C3, v1);
const v20 = new C3(v19, v1);
const v21 = new C3(v19, v1);
function f22(a23, a24, a25, a26) {
    const o27 = {
        "b": a25,
        "e": "global",
        ..."stack",
        [v21]: v20,
        "a": v1,
        3: a24,
        "c": v19,
        [v19]: v1,
        3870034946: a26,
        "g": a26,
        "h": v20,
        [-2]: v1,
        ...v21,
        "d": C3,
        ...a24,
    };
    return o27;
}
const v28 = f22(v21, v19, v19, v19);
let v29 = f22("stack", v20, v19, v28);
let v30 = f22(v19, C3, v21, v21);
const v34 = [-1000000000000.0,1.7976931348623157e+308,1.7889199768662521e+308,2.0,0.30414151789326704];
const v35 = [0.8559282308760314,-2.2250738585072014e-308,5.389777442663951e+307,-1.0,-1.3724315112032831e+306,-857458.9809460618,-0.0];
let v36 = [2.0,0.19497854994977126,486414.9510516024,1e-15,1.2005108278180145,-3.0,0.3281748430827145];
({"a":v36,"c":v29,"d":v30,} = v28);
const o37 = {
    __proto__: v35,
    [v1]: "stack",
    ...v19,
    [v34]: "stack",
};
const o38 = {
};
new Proxy(v34, o38);
