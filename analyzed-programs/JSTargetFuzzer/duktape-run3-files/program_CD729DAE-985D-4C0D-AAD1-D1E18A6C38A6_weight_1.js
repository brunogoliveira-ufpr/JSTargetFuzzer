const v0 = [48886,11416,0,-32479,-60495];
[-2147483649,10,-11097,-41822879,15,-60203,-1770295970];
const v2 = [-6,4096,65536,2147483648,268435440,-12699];
class C6 {
    constructor(a8, a9, a10) {
        a10.keys(a8, a9, v0, a9, this);
    }
    toString(a16, a17) {
        return -15n;
    }
    static 737108312;
}
const v21 = new C6(0, 64, v0);
const v22 = new C6(77773984, 64, v2);
const v23 = new C6(77773984, 64, v21);
let v25 = new Date();
class C26 extends C6 {
    #b = 77773984;
    toString(a28, a29) {
        const v31 = [];
        Reflect.apply(v0.keys, this, v31);
        return v23;
    }
    static set d(a35) {
        for (let v36 = 0; v36 < 32; v36++) {
            v22["p" + v36] = v36;
        }
    }
}
new C26();
let v40 = new C26();
new C26();
const o42 = {
    "set": Date,
};
const v44 = new Proxy(v25, o42);
C6 <= v44;
new C26();
--v25;
C26.d;
v40 = C26;
