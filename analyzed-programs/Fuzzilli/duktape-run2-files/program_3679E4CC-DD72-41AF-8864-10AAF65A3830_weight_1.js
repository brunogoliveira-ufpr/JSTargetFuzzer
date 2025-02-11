const v3 = [-2147483648,257,-2147483648];
const v4 = [-2147483648];
const v5 = [v3,v4];
function f6(a7, a8, a9, a10) {
    const o22 = {
        valueOf(a12, a13, a14) {
            const o17 = {
                "maxByteLength": 2933,
            };
            const v19 = new SharedArrayBuffer(2933, o17);
            new BigInt64Array(v19);
            return BigInt64Array;
        },
    };
    return o22;
}
const v23 = f6(v3, v5, v3, 257);
f6(v5, f6, v3, f6);
const v27 = [f6(v5, v4, v4, 257),-2];
const v29 = Reflect.apply(v5.indexOf, v23, v27);
Reflect[2] = v23;
const v31 = Symbol.split;
const v32 = v23[v31];
try { v29(); } catch (e) {}
try { v3.find(v32, v31); } catch (e) {}
