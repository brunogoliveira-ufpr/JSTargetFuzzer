class C3 {
    static #h = "n";
    constructor(a5, a6) {
    }
    #g = "n";
    static #b;
    static g;
    static 536870912 = "5I";
}
const v10 = new C3("5I", "n");
const v11 = new C3("symbol", "n");
const v12 = new C3(v10, v11);
let v16 = 0;
do {
    function F17(a19, a20, a21, a22) {
        if (!new.target) { throw 'must be called with new'; }
        this.g = a19;
    }
    const v23 = new F17(v12, "n", "n", 8);
    new F17(v23, v23, v10, 4294967297);
    new F17(v23, C3, v23, -2);
    v16++;
} while (v16 < 1)
