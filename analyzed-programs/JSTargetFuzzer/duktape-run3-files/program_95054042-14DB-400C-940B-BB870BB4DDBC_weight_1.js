class C3 {
    static m(a5) {
        function F6(a8) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = a8;
            this.e = a8;
        }
        new F6(this);
        new F6(this);
        new F6(-3.0);
        return -3.0;
    }
    ["hxF"] = "hxF";
    [1000000000000.0];
}
const v12 = new C3();
new C3();
new C3();
function* f21(a22, a23) {
    yield 7;
    return a23;
}
f21(2147483649, v12);
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
