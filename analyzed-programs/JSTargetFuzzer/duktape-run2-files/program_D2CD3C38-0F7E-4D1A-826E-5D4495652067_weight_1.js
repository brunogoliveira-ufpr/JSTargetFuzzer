function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 65535;
    this.e = 65535;
}
new F0();
new F0();
new F0();
new Float32Array(4);
new Float64Array(779);
new Uint8Array(1024);
!512;
const v23 = Symbol.iterator;
const o32 = {
    [v23]() {
        let v25 = 10;
        const o31 = {
            next() {
                v25--;
                const v29 = v25 == 0;
                const o30 = {
                    "done": v29,
                    "value": v25,
                };
                return o30;
            },
        };
        return o31;
    },
};
