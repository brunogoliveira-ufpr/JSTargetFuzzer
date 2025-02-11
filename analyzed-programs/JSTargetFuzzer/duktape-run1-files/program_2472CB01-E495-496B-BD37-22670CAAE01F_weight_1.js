function f3(a4, a5) {
    const o14 = {
        set a(a7) {
            super.b = a7;
        },
        ...a5,
        "h": a4,
        p(a9, a10) {
            function f11() {
                return this;
            }
            let v12;
            try { v12 = this.m(a9); } catch (e) {}
            try { v12.toUpperCase(-1512231450n, 9223372036854775807n, a9, v12); } catch (e) {}
            return -9007199254740990n;
        },
    };
    return o14;
}
const v15 = f3(-9007199254740990n, 9223372036854775807n);
const v16 = f3(9223372036854775807n, -9007199254740990n);
const v17 = f3(9223372036854775807n, -9007199254740990n);
const v21 = delete v15[268435441];
const v22 = -9007199254740990n % v21;
f3(-9007199254740990n, -9007199254740990n);
9223372036854775807n * 9223372036854775807n;
for (let i26 = 0; i26 < 8; i26++) {
    const v36 = [255,268435439,v22,v21];
    Reflect.apply(v17.p, v16, v36);
}
