const v3 = ["MAX_VALUE","name","MAX_VALUE"];
const v4 = ["isConcatSpreadable"];
const v5 = [v3,"MAX_VALUE",v4,v4];
const v10 = new WeakMap();
const t4 = "name";
delete t4[v5];
let v18 = 10;
v3[68] = v18;
v18 = 14156;
try { v10("isConcatSpreadable", undefined, -6.0840073007400575, WeakMap, "MAX_VALUE"); } catch (e) {}
function F20(a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a22;
    this.e = v10;
}
new F20("isConcatSpreadable", v3);
new F20("MAX_VALUE", v3);
new F20("MAX_VALUE", v3);
