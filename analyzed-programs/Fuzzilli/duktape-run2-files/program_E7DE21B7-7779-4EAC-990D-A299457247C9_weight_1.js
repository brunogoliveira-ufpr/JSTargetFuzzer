function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a5;
    this.b = a6;
}
new F3(1530n, -128n);
const v8 = new F3(1530n, -128n);
const v9 = new F3(v8, -128n);
const v14 = new Date();
const v18 = 42320 instanceof F3;
for (let v19 = 0; v19 < 73; v19++) {
    const v20 = [v19,v19,v8,v14];
    const v21 = [v20,F3,v20,512,-2104197352];
    [v21,v21,v19,v21,F3];
    try { Date(v18, ...v9, ...v20, ...v19, ...v21, -2104197352); } catch (e) {}
}
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
