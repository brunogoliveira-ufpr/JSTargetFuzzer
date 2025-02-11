class C6 {
    set h(a8) {
        try { this.stringify(a8, a8, -9007199254740992, this); } catch (e) {}
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            this.b = a12;
        }
        const v14 = new F10(this, -31724);
        const v15 = new F10(v14, a8);
        new F10(v15, a8);
    }
    d;
}
const v17 = new C6();
const v18 = new C6();
new C6();
try {
    function F20(a22, a23, a24) {
        if (!new.target) { throw 'must be called with new'; }
        this.g = a22;
    }
    new F20(256, v18, v17);
    new F20(256, C6, v17);
    new F20(8649, v18, v18);
} catch(e28) {
}
