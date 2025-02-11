["m","2","m",["m","m","-1024","2"],"m"];
const v5 = ["m"];
new BigInt64Array(2047);
new Float64Array(256);
new Float64Array(64);
const t5 = v5["reverse"]();
t5[BigInt64Array] = "reverse";
for (let v17 = 0; v17 < 32; v17++) {
    v5["p" + v17] = v17;
}
delete v5["reverse"];
const v22 = Symbol.iterator;
const o31 = {
    [v22]() {
        let v24 = 10;
        const o30 = {
            next() {
                v24--;
                const v28 = v24 == 0;
                const o29 = {
                    "done": v28,
                    "value": v24,
                };
                return o29;
            },
        };
        return o30;
    },
};
