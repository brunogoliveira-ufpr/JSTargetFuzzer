const v5 = new Uint8Array(245);
const v8 = new BigUint64Array(8);
new Float64Array(6);
[v5,v5];
[v5,Float64Array];
[Float64Array,245];
const v15 = v8.length;
const v17 = Symbol.toPrimitive;
const o20 = {
    [v17]() {
        function f19() {
            return v8;
        }
        return v15;
    },
};
