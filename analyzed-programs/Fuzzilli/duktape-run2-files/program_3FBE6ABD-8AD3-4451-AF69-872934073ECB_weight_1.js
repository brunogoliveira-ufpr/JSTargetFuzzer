function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -268435456;
    this.g = -268435456;
    this.d = -268435456;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C7 extends F0 {
    #m(a9) {
        const v11 = [this,v5,this,[this,this,true,a9,F0]];
        [v4,v11,v5,v11,v3];
        return true;
    }
    0;
    static #f;
    e;
    a;
}
new C7();
new C7();
new C7();
function f16() {
    return v3;
}
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
