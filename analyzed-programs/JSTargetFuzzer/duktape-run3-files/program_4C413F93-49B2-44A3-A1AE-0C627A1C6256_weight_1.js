function f3(a4, a5) {
    const o16 = {
        ["g"]: "bigint",
        ["bigint"](a7) {
            Object.defineProperty(a7, "e", { writable: true, value: this });
            const o11 = {
                "maxByteLength": 4272312896,
            };
            const v13 = new SharedArrayBuffer(3695, o11);
            new Uint8Array(v13);
            return b;
        },
    };
    return o16;
}
const v17 = f3("g", "bigint");
const v18 = f3(f3, f3);
let v19 = f3(f3, v18);
function F20(a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a23;
    this.b = a24;
}
const v25 = new F20("g", v18, v19);
const v26 = new F20("g", v17, v25);
new F20("g", "bigint", "bigint");
const v31 = [-4294967295,25909,F20];
const v33 = [["d",v31,v31,-65536,-4294967295],"bigint",F20,F20];
const t27 = "d";
t27.__proto__ = v25;
v19 = "bigint";
function F34(a36, a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v33;
    this.f = a37;
}
new F34(v19, v25, "g");
new F34(v18, v25, "g");
new F34("d", v26, "g");
