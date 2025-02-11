class C3 {
    [-1] = "arguments";
    static {
        const v5 = [this,this];
        v5 % -996198725;
        v5[-996198725] = -29655;
    }
    static b = "arguments";
    static #a;
    #f = 29655;
    f;
}
const v8 = new C3();
const v9 = new C3();
const v10 = new C3();
[29655,v10,2147483648,C3];
[v8,2147483648,-996198725,C3];
const v16 = [v9,29655,"arguments",v8];
try {
const t0 = 29655;
t0(29655, v16);
} catch (e) {}
const v19 = [29655,4096];
Reflect.apply(v16.lastIndexOf, v9, v19);
for (let v22 = 0; v22 < 32; v22++) {
    const t25 = "arguments";
    t25["p" + v22] = v22;
}
