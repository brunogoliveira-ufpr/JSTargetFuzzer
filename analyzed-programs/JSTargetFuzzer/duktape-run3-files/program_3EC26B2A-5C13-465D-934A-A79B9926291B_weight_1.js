function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -174250756;
}
let v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [F0,F0,v4,v5,F0];
const v7 = [v6,v6];
const v8 = [v5,v7,v7];
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v3;
}
const v13 = new F9(v7, v5);
const v14 = new F9(v8, v13);
new F9(v6, v4);
let v16 = v5 == v3;
let v17;
try { v17 = v6.reduceRight(v16, v3); } catch (e) {}
const o18 = {
    [v3]: v7,
    "e": v4,
    "c": v17,
    ...v4,
};
o18 >> v3;
({"b":v3,"g":v16,} = v14);
