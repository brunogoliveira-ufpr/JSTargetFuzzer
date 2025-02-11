function f0() {
    const o11 = {
        ["d"]: -2.1589778780702185,
        "f": -2.1589778780702185,
        "c": -2.1589778780702185,
        __proto__: "d",
        set d(a5) {
            a5.length = 127;
            try { new a5(); } catch (e) {}
            for (let v8 = 0; v8 < 32; v8++) {
                a5["p" + v8] = v8;
            }
        },
    };
    return o11;
}
const v12 = f0(f0, f0);
const v13 = f0();
const v14 = f0();
function f18(a19, a20, a21, a22) {
    const o32 = {
        set f(a24) {
            function F25(a27, a28) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = this;
            }
            new F25(F25, v13);
            new F25(a20, v12);
            new F25(a19, v13);
        },
        "c": -1.0,
        "h": v14,
        256: a22,
    };
    return o32;
}
f18(v12, -1.0, v12, v12);
f18(-1.0, 1.5272535195519836, v14, 1.5272535195519836, f18(-1.0, -1.0, v12, v13));
new Float32Array(1000);
const v41 = new Int32Array(16);
const v44 = new Int16Array(3144);
const v48 = 3144 >> v44;
let v49;
try { v49 = Int16Array(v48, 1000, 3144); } catch (e) {}
v41.byteOffset;
switch (0.01413596778607562) {
    case v13:
        try { v49(); } catch (e) {}
        break;
    default:
        v44.byteOffset;
        break;
}
