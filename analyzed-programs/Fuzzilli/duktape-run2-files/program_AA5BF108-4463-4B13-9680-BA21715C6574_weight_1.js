const v2 = new Uint8Array(257);
const v5 = new Int32Array(1948);
const v8 = new Int16Array(257);
function f9(a10, a11, a12, a13) {
    const o30 = {
        __proto__: v5,
        "a": v2,
        [257]: v5,
        "b": v8,
        "d": 1948,
        set e(a15) {
            for (let i18 = 0, i19 = 10; i18 < i19; i18++, i19--) {
            }
        },
    };
    return o30;
}
const v31 = f9(v2, 257, Uint8Array, 257);
const v33 = f9(v8, 1948, f9(Int16Array, 257, 1948, 1948), 257);
class C34 {
    [f9] = v2;
    static m(a36, a37, a38) {
        a38[1073741824] = 257;
        try { a36.o(); } catch (e) {}
        return this + a36;
    }
    c = Int32Array;
    99 = Int16Array;
    o(a42, a43, a44) {
        let v45 = 0;
        do {
            const o46 = {
                "call": f9,
                "construct": f9,
                "defineProperty": f9,
                "deleteProperty": f9,
                "get": f9,
                "getOwnPropertyDescriptor": f9,
                "getPrototypeOf": f9,
                "has": f9,
                "isExtensible": f9,
                "ownKeys": f9,
                "set": f9,
                "setPrototypeOf": f9,
            };
            new Proxy(v2, o46);
            v45++;
        } while (v45 < 5)
        return Uint8Array;
    }
}
const v52 = new C34();
new C34();
const v54 = new C34();
v54.__proto__ = v52;
let v55;
try { v55 = f9(257, 257, C34, ...257, v33, v31); } catch (e) {}
function f56(a57, a58) {
    v55 = arguments;
    f9(257, 257, a57, a57);
    return arguments;
}
f56(v33, v54, v54);
const v63 = Symbol.iterator;
const o72 = {
    [v63]() {
        let v65 = 10;
        const o71 = {
            next() {
                v65--;
                const v69 = v65 == 0;
                const o70 = {
                    "done": v69,
                    "value": v65,
                };
                return o70;
            },
        };
        return o71;
    },
};
