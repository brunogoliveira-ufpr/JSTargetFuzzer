function f0() {
    const o12 = {
        p(a5) {
            const v7 = Symbol.toPrimitive;
            const o11 = {
                [v7]() {
                    let v9;
                    try { v9 = new this(); } catch (e) {}
                    [] = v9;
                    return -105840.67885709275;
                },
            };
            return -858.0385832105344;
        },
        "c": -858.0385832105344,
        42564374: -1000000000000.0,
    };
    return o12;
}
const v13 = f0();
f0();
f0();
const v18 = new Float64Array(6);
const v21 = new Int16Array(127);
new Uint8Array(1000);
let v28;
try { v28 = v13.p(); } catch (e) {}
let v29;
try { v29 = v28(6, Int16Array, 1000, Int16Array, 6); } catch (e) {}
Object.defineProperty(v21, 1, { enumerable: true, get: f0 });
let v30 = 0;
do {
    v18.__proto__;
    try { v29(f0); } catch (e) {}
    v30++;
} while (v30 < 8)
