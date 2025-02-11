class C3 {
    static 9 = 3;
    #g = 1.0;
    constructor(a5, a6) {
        const v7 = [];
        try {
            v7.#g = 1000000000.0;
        } catch(e8) {
        }
    }
    get d() {
        let v13 = 2.0;
        let v14 = v13 ^ 1.0;
        let v15 = v14--;
        --v13;
        --v15;
        ++v15;
        return 1000000000.0;
    }
}
const v19 = new C3(1000000000.0, 1.0);
new C3(v19, C3);
new C3(C3, C3);
const o33 = {
    "maxByteLength": 2191,
};
const v35 = new SharedArrayBuffer(3, o33);
const v37 = new Float32Array(v35);
v37.length;
