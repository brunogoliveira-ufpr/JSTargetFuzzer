let v1 = new WeakSet();
const v3 = new WeakMap();
const v6 = new Array(122);
function f7(a8, a9, a10, a11) {
    const o12 = {
        "a": a8,
        "d": a10,
        [a11]: v3,
        __proto__: v6,
        "e": WeakSet,
        ...v6,
        ...v3,
        "b": v3,
        "g": a10,
        "c": WeakMap,
        "f": WeakSet,
        ...Array,
        "h": WeakMap,
    };
    return o12;
}
let v13 = f7(Array, f7, f7, WeakMap);
let v14 = f7(v13, v3, WeakMap, v13);
const v15 = f7(v3, v1, v14, f7);
function f16() {
    return WeakMap;
}
v1 = v15;
try { v14.startsWith(f7, "MAX_VALUE", v15, 122, v3); } catch (e) {}
v1[536870912] = f16;
({"g":v14,...v13} = v3);
typeof v6 === "function";
