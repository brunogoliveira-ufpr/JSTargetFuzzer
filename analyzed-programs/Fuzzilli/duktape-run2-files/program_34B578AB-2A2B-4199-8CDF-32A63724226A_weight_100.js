const v13 = [-2];
const v14 = [-2];
function f15(a16, a17, a18, a19) {
    const o26 = {
        valueOf(a21, a22, a23) {
            const o25 = {
                "maxByteLength": 2933,
            };
            return a18;
        },
    };
    return o26;
}
const v27 = f15();
const v30 = [f15(v13, f15, v14, v27),-2];
let v31 = 0;
do {
    v30.__proto__;
    const o33 = {
        "get": f15,
        "ownKeys": f15,
        "setPrototypeOf": f15,
    };
    new Proxy(v30, o33);
    v31++;
} while (v31 < 2)
const v40 = Reflect.apply(v14.indexOf, v27, v30);
Reflect[2] = v27;
const v42 = Symbol.split;
const v43 = v27[v42];
try { v40(); } catch (e) {}
try { v13.find(v43, v42); } catch (e) {}
