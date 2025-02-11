function f0() {
    const o7 = {
        [9]: 9,
        __proto__: "mt",
        ..."mt",
        ..."mt",
        "g": 9,
        set b(a5) {
            let v4 = this;
            v4 /= v4;
            function f6() {
                return 2.220446049250313e-16;
            }
        },
    };
    return o7;
}
const v8 = f0();
const v9 = f0();
const v10 = f0();
new BigInt64Array(256);
new Uint8ClampedArray(2462);
const v19 = new Uint32Array(2735);
Object.defineProperty(v9, "g", { writable: true, configurable: true, enumerable: true, value: v19 });
const o20 = {
    __proto__: v10,
    "c": v9,
    "e": BigInt64Array,
    ...v9,
};
v8.b += 2735;
let {"b":v21,} = o20;
v21 = 2735;
