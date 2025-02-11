function f0() {
}
let v1 = 1024;
v1 = -53539;
f0();
function f20(a21, a22) {
    -45680 & a21;
    a21.toString = f0;
    const v25 = Symbol.iterator;
    const o34 = {
        [v25]() {
            let v27 = 10;
            const o33 = {
                next() {
                    v27--;
                    const v31 = v27 == 0;
                    const o32 = {
                        "done": v31,
                        "value": v27,
                    };
                    return o32;
                },
            };
            return o33;
        },
    };
    return o34;
}
f20("object", "object");
