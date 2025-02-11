const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v0;
}
new F1();
new F1();
new F1();
const v8 = new Uint8ClampedArray(5);
const v11 = new Int16Array(4);
const v14 = new Int16Array(10);
let v15 = 0;
while (v15 < 5) {
    v11[3] = v8;
    v0.__proto__;
    v15++;
}
for (let v20 = 0; v20 < 32; v20++) {
    v14["p" + v20] = v20;
}
