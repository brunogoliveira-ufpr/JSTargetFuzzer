new WeakMap();
const v10 = new Uint32Array(2732);
new Int16Array(2468);
new Uint8ClampedArray(49);
let v17;
try { v17 = v10.reverse(); } catch (e) {}
v17 = 3n;
for (let i20 = 0, i21 = 10; i20 < i21; i20++, i21--) {
    const v30 = Symbol.iterator;
    const o39 = {
        [v30]() {
            let v32 = 10;
            const o38 = {
                next() {
                    v32--;
                    const v36 = v32 == 0;
                    const o37 = {
                        "done": v36,
                        "value": v32,
                    };
                    return o37;
                },
            };
            return o38;
        },
    };
}
