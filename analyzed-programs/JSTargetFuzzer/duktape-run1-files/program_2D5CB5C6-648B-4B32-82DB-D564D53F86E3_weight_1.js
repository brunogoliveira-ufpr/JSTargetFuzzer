function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a5;
}
const v7 = new F3("a", "eY3H");
const v8 = new F3("eY3H", "7kiU");
new F3("7kiU", "a");
function f10() {
    return F3;
}
function f14(a15, a16, a17) {
    'use strict';
    const v18 = v7.c;
    try { v8.toISOString(v18, v18); } catch (e) {}
    const v21 = Symbol.iterator;
    const o30 = {
        [v21]() {
            let v23 = 10;
            const o29 = {
                next() {
                    v23--;
                    const v27 = v23 == 0;
                    const o28 = {
                        "done": v27,
                        "value": v23,
                    };
                    return o28;
                },
            };
            return o29;
        },
    };
    return a16;
}
f14(536870889, 536870889, v7);
