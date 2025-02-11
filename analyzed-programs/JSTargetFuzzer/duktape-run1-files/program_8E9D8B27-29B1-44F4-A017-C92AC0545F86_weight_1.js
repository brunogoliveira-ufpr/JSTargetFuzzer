function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
    this.b = f0;
    this.e = f0;
}
const v3 = new F1();
const v4 = new F1();
new F1();
let v6 = 16988n;
class C9 extends F1 {
    set e(a11) {
        try {
            super.charCodeAt(f0, v6, v3);
        } catch(e13) {
        }
    }
    static 5 = F1;
    static #g;
    static d;
    #b = 13n;
    #f;
    static h = v3;
    static 128 = v4;
}
new C9();
new C9();
new C9();
[-3.681768953762335,-2.0,-2.2250738585072014e-308,-528833.2103677496,-1.0,-1000.0,-1.3934485478682344e+307,0.22966721909943344];
[0.9852857505600762,0.5883130720379187,1e-15,-2.220446049250313e-16,-5.0,1000.0];
for (const v20 of [1000000000000.0,-612.0717401871063]) {
    v6 = v20;
    let v23 = 1073741824;
    const v24 = v20 - v23;
    const v25 = v24 << v24;
    ++v23;
    Math.trunc(v25);
}
