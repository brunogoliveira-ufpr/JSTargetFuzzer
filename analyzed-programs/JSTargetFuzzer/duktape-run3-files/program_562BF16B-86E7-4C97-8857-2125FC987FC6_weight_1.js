function f3() {
    return 474654.1326507274;
}
function f4() {
    return 1000000000000.0;
}
const v8 = [474654.1326507274,-2];
let v10 = [[268435439,v8,268435439,f3]];
v10 ||= v10;
function f11(a12, a13, a14) {
    v10[a13] = a13;
    Object.defineProperty(v8, a12, { configurable: true, enumerable: true, get: f3 });
    return -39496;
}
0.0 === f11(v8, -2, -2);
const v18 = Symbol.iterator;
const o27 = {
    [v18]() {
        let v20 = 10;
        const o26 = {
            next() {
                v20--;
                const v24 = v20 == 0;
                const o25 = {
                    "done": v24,
                    "value": v20,
                };
                return o25;
            },
        };
        return o26;
    },
};
