function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 536870888;
    this.d = 536870888;
    this.f = 536870888;
}
new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = /(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\10Xa+/gsiy;
let v7 = /[x]/md;
const v8 = /a\W?/gsdu;
const v13 = [[v8],v5];
const v14 = [v7,v7,v6,v7];
v7 = v8;
async function f18(a19, a20) {
    try { a20(a19, a19, a19, ...268435440, a20, a20); } catch (e) {}
    Object.defineProperty(a20, 129, { writable: true, configurable: true, value: v13 });
    return await v14;
}
f18(v8, v4);
v7.toString = f18;
new Array(7);
