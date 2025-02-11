function f3(a4, a5) {
    const o15 = {
        6: 7n,
        "e": -7n,
        "c": 1073741825n,
        "f": a5,
        [7n]: -7n,
        "g": a4,
        "a": a5,
        [a5]: a5,
        get d() {
            this.e = this;
            a4 = -7n;
            function F7(a9, a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = a9;
            }
            new F7(7n, a4, -7n);
            new F7(a4, 7n, -7n);
            new F7(1073741825n, 7n, a4);
            return a5;
        },
    };
    return o15;
}
const v16 = f3(-7n, -7n);
const v17 = f3(-7n, 7n);
f3(7n, 1073741825n);
new Date();
const v27 = async (a28, a29, a30) => {
    v17.__proto__ = a30;
    new Set();
    const v36 = --a29;
    v36 && v36;
    a29 >> -16;
    await v16;
    return v36;
};
