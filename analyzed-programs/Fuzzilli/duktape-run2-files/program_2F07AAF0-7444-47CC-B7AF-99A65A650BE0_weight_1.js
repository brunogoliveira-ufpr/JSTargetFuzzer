function f1() {
    const o6 = {
        [-2]: undefined,
        [-1]: undefined,
        7: undefined,
        [undefined]() {
            const v3 = super.b;
            v3[1503] = undefined;
            v3[Duktape.act] = this;
            return this.__proto__;
        },
    };
    return o6;
}
f1();
f1();
f1();
const o24 = {
    valueOf() {
        const o19 = {
            "maxByteLength": 2147483649,
        };
        const v21 = new ArrayBuffer(15, o19);
        new Float32Array(v21);
        return "Vg";
    },
};
