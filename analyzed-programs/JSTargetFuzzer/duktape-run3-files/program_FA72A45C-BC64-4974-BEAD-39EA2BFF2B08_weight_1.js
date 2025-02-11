const v6 = [-256,-2147483647,65536,1617631736,-665396987,9007199254740992,268435456,14,-814362253];
const v7 = [6,15];
const v8 = [3,1533005554,1024];
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a11;
    this.c = -4.0;
}
const v13 = new F9(-0.9805375505541551, v6);
new F9(F9, v7);
new F9(-536870912n, v8);
const v17 = Symbol.toPrimitive;
const o23 = {
    [v17]() {
        const v19 = new F9(v13, v6);
        const o20 = {
            "construct": Symbol,
            "isExtensible": Symbol,
            "ownKeys": Symbol,
            "preventExtensions": Symbol,
            "set": Symbol,
        };
        new Proxy(v19, o20);
        return -3.0;
    },
};
