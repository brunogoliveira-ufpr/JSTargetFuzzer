class C3 {
    #n(a5) {
        function f6(a7, a8) {
            let v9;
            try { v9 = this.trimStart(127, -9007199254740991, a5, a8, a8); } catch (e) {}
            return v9;
        }
        f6(536870889, -9007199254740991);
        const o13 = {
            "maxByteLength": 2993,
        };
        const v15 = new SharedArrayBuffer(2993, o13);
        new Int32Array(v15);
        return 127;
    }
}
new C3();
new C3();
new C3();
let v21 = "toStringTag";
v21.length = 0;
const t21 = "d";
t21.length %= 0;
for (const v28 of "getUTCHours") {
    var a = v28;
    v21 = v28;
}
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
