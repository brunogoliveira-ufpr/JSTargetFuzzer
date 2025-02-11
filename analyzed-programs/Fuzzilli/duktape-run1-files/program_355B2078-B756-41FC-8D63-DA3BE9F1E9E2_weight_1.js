let v2 = "-65536";
function f3(a4, a5) {
    const o16 = {
        n(a7, a8) {
            v2 = a8;
            const o11 = {
                "maxByteLength": 65536,
            };
            const v13 = new SharedArrayBuffer(1000, o11);
            new Int8Array(v13);
            return a5;
        },
    };
    return o16;
}
const v17 = f3("arguments", "toString");
f3(v2, "toString");
f3("toString", "arguments");
new Uint8ClampedArray(255);
new BigInt64Array(2);
new Uint8ClampedArray(256);
const v29 = [-9,-9007199254740992,1073741823,-6,41757,11,-260649198,10000];
const v30 = [-5,-9223372036854775808,-11,6];
Object.defineProperty("arguments", "length", { writable: true, enumerable: true, value: [-22694,-16,-536870912] });
Object.defineProperty(v29, 2147483647, { writable: true, configurable: true, set: f3 });
[[delete v30["arguments"],"toString",2,v30],256];
[f3,Uint8ClampedArray,1.1273440342113812,256,v17];
