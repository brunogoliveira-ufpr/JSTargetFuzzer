function f0() {
}
const v8 = new Date();
const v10 = new Date();
let v14 = 1073741824;
--v14;
v10.toString = f0;
const o19 = {
    valueOf() {
        Object.defineProperty(Date, -1391046968n, { enumerable: true, value: v8 });
        return -256;
    },
};
Date[5] = f0;
v10 % v14;
