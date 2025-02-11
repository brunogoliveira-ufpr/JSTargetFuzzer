const v3 = [3,-2147483647,3,268435441];
const v4 = [-2147483647,268435441,v3,268435441,-2147483647];
[3,v4,-2147483647,v4,v3];
const v6 = [7,-9223372036854775807,-65535,54027,1,0,268435456,4];
const v7 = [4,-4096,-26076926,-15,-4096,9,-54075,4294967295,536870887,9];
const v8 = [5,-344365047,-1639478540];
const v9 = [v3,v4,v6,v7,v3];
const v10 = [v6,v3];
[v9,v3,v10,v8,v8];
const o15 = {
    valueOf() {
        Object.defineProperty(this, "d", { enumerable: true, value: v6[v10] });
        this.d;
        return 3;
    },
};
new Uint16Array(4);
new Float64Array(122);
new Int16Array(2099);
