function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -2;
    this.b = -2;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [F0,v3,v4];
[F0,[v6,v6,v6,v6,v5]];
[-65536,63152,-2025264438];
const v10 = [2147483648,868795835];
const v11 = [16,-536870912,-41658,-65536,2051825451,2000333615,8];
class C12 extends F0 {
    static #toString(a14, a15, a16, a17) {
        new F0();
        let {"b":v19,"h":v20,"length":v21,} = a17;
        v19 / v11;
        const v24 = Symbol.iterator;
        const o33 = {
            [v24]() {
                let v26 = 10;
                const o32 = {
                    next() {
                        v26--;
                        const v30 = v26 == 0;
                        const o31 = {
                            "done": v30,
                            "value": v26,
                        };
                        return o31;
                    },
                };
                return o32;
            },
        };
        return a15;
    }
}
const v34 = new C12();
new C12();
new C12();
C12 >= v34;
for (let v41 = 0; v41 < 88; v41++) {
    delete v10[v41];
}
