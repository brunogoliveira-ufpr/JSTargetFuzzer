function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = null;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a8;
    this.f = a8;
}
const v9 = new F6(v4);
const v10 = new F6(v3);
let v11 = new F6(v4);
const v12 = [F6,v11];
[[v10,null,v5],F1,v12];
v11 = v9;
const v16 = Symbol.iterator;
const o25 = {
    [v16]() {
        let v18 = 10;
        const o24 = {
            next() {
                v18--;
                const v22 = v18 == 0;
                const o23 = {
                    "done": v22,
                    "value": v18,
                };
                return o23;
            },
        };
        return o24;
    },
};
