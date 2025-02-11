function f3(a4) {
    const o9 = {
        "g": 28960n,
        get b() {
            const v6 = this[a4];
            const v7 = delete v6?.[a4];
            let v8;
            try { v8 = new v6(a4, v7, 28960n, a4); } catch (e) {}
            return v8;
        },
        33: a4,
        "h": -1486763969n,
        [-1]: -1486763969n,
        2147483649: -1486763969n,
    };
    return o9;
}
const v10 = f3(-1486763969n);
f3(28960n);
const v12 = f3(-1486763969n);
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v12;
    this.g = -1347915757n;
}
new F13(-1486763969n, 28960n, F13);
const v19 = new F13(-1486763969n, -1486763969n, v10);
new F13(-1347915757n, -1486763969n, v19);
new f3(-1486763969n);
const v22 = f3(-1486763969n);
let v23;
try { v23 = v10.setUTCSeconds(v19); } catch (e) {}
if (v23) {
    v22[Symbol.search] = F13;
} else {
}
