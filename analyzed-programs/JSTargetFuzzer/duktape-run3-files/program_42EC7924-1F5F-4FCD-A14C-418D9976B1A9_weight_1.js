const v2 = new Array(256);
const v3 = [256,v2,256];
const v4 = [v3,256,v3,Array,v2];
const v5 = [v3,v3,256,v3,v4];
const v6 = [v4,v5,256,v5,v5];
const v7 = [v4,v2,v2,Array,v3];
const v8 = [v6];
let v12 = 0;
while (v12 < 8) {
    Object.defineProperty(v5, v5, { writable: true, set: Array });
    Array(v12);
    v12++;
}
v7.keys(256, ...v8, ...v3, v12);
