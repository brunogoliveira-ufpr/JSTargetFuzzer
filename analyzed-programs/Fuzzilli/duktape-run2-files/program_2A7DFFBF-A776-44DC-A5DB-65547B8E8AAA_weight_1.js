const v4 = new WeakMap();
function f5() {
    return 1073741823;
}
function f6() {
    return f5;
}
const v12 = new Float32Array(2);
const v15 = new Uint8ClampedArray(1024);
const v18 = new Float64Array(220);
for (let [v19,,v20] of v12) {
    v18.__proto__ = v15;
    v20 /= 1073741825;
}
var c = 268435439;
const o23 = {
    valueOf() {
        this[Float64Array] = this;
        1073741825 << v4;
        return 1073741825;
    },
};
