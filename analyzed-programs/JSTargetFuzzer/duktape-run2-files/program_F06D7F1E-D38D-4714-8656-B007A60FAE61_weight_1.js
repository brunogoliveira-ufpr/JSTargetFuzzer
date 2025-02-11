function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a5;
}
const v7 = new F3(8n, -1n);
const v8 = new F3(3n, 8n);
const v9 = new F3(8n, 3n);
class C10 {
    static toString(a12, a13) {
        const v16 = new WeakSet();
        ({"g":a13,} = v16);
        return a12;
    }
    static [v8] = -1n;
    #f;
    h;
    a = v7;
}
new C10();
new C10();
const v19 = new C10();
class C23 {
    h;
    a;
    static #h = 3n;
    #a = v8;
    static [v9] = v19;
}
new C23();
new C23();
new C23();
