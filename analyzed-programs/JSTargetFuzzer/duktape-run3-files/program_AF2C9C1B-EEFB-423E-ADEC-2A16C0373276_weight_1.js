function f0() {
    const o8 = {
        get g() {
            let v5 = 2.976272209616898 >> 127;
            ({"f":v5,} = this);
            this["wgQpC"];
            super.f = this[1391];
            return this;
        },
        "h": "wgQpC",
        "e": "wgQpC",
        [2.976272209616898]: 2.976272209616898,
        "b": 2.976272209616898,
    };
    return o8;
}
f0();
const v10 = f0();
const v11 = f0();
let v15 = 127;
function f18(a19, a20) {
    const o25 = {
        [a20]: a19,
        __proto__: v10,
        "h": a20,
        [v11]: a20,
        get e() {
            v15 **= a20;
            return 9007199254740992n;
        },
        7: a20,
    };
    return o25;
}
f18(f0, 1122421734);
const t34 = f18(f18(2, 1122421734), v15);
t34.e += v15;
f18(64550n, -2147483649);
const v37 = Symbol.iterator;
const o46 = {
    [v37]() {
        let v39 = 10;
        const o45 = {
            next() {
                v39--;
                const v43 = v39 == 0;
                const o44 = {
                    "done": v43,
                    "value": v39,
                };
                return o44;
            },
        };
        return o45;
    },
};
