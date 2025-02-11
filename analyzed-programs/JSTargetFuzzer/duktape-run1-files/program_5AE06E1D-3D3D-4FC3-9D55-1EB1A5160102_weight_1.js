const v8 = new Uint8Array(7);
new Uint8ClampedArray(v8);
function F11(a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a13;
    this.a = -45759657;
    this.f = a13;
}
const v16 = new F11(257, 536870912, -32602);
const v17 = new F11(536870912, -32602, -30999);
const v18 = new F11(1691264076, -32602, 536870912);
function f21(a22, a23) {
    'use strict';
    Object.defineProperty(v18, "h", { writable: true, value: a23 });
    return v18;
}
const v24 = f21(v17, v17);
const v29 = ["fw6P",-4294967296,-4294967296,"fw6P","fw6P"];
const v30 = ["boolean",256,4096];
const v31 = ["fw6P","boolean",v30,256,"boolean"];
function F32(a34, a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -4294967296;
    a36.a = v29;
}
if (v24) {
    v24.f = v16;
} else {
    function f37() {
        return Uint8Array;
    }
}
const v38 = new F32("-12992", v29, v31);
new F32("-12992", v30, v31);
const v40 = new F32("-12992", v29, v31);
const v43 = v40[Symbol.split];
try { v31.sort(v43); } catch (e) {}
let v48 = 541964588;
v48++;
const v50 = v48 | v38;
const v51 = ~v48;
const v52 = v51 || v51;
v51 ** v43;
v52 / v50;
