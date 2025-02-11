const v8 = new Int32Array(128);
const v11 = new Float64Array(2982);
new Int16Array(921);
v11[3] = v8;
try { v8.set(v11); } catch (e) {}
const o20 = {
    valueOf() {
        try {
            super.p(Float64Array, -192676784);
        } catch(e19) {
        }
        return 128;
    },
};
