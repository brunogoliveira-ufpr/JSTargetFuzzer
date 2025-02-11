function f0() {
}
const v1 = [f0,f0,f0];
const v2 = [f0,v1];
const v3 = [v1,f0,f0,v2];
function f7() {
    return v2;
}
class C8 extends f0 {
    [v3];
    constructor(a10, a11, a12, a13) {
        super();
        this.__proto__;
    }
    toString(a16, a17, a18, a19) {
        let v20 = a16 !== this;
        if (v20) {
            new f0();
            ({"h":v20,"length":a18,} = a16);
        } else {
            super.b;
        }
        return f7;
    }
}
const v23 = new C8(129, v3, v3, 129);
new C8(129, v2, v23, 256);
const v25 = new C8(256, v2, v23, 14);
Object.defineProperty(v2, f7, { writable: true, enumerable: true, get: f0 });
v2[2] = 14;
let [v29,v30,...v31] = v1;
v25[v29] = v2;
let [] = v31;
const v33 = Symbol.iterator;
const o42 = {
    [v33]() {
        let v35 = 10;
        const o41 = {
            next() {
                v35--;
                const v39 = v35 == 0;
                const o40 = {
                    "done": v39,
                    "value": v35,
                };
                return o40;
            },
        };
        return o41;
    },
};
