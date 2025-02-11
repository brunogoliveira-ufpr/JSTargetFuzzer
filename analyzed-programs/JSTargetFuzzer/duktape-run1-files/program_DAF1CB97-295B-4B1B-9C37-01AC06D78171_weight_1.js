function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 536870912;
    this.a = 536870912;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o25 = {
        set b(a10) {
            const v11 = a8.g;
            try { v11(a8, v3); } catch (e) {}
            let {"f":v16,"length":v17,} = "cause";
        },
        [v5]: a8,
        set f(a19) {
            v4.a;
            function f21() {
                return a7;
            }
            [127,-9,-536870912,-9007199254740991,-9007199254740992,13,9];
            [268435439,64,-9007199254740991,-248338932,6,1073741824,-1847257163,-5];
            [-59005,56234,-10,129,473945860,-3,-9223372036854775808,6,1619923320,-128];
        },
    };
    return o25;
}
const v26 = f6(v3, v5);
const v27 = f6(v3, v3);
const v28 = f6(v3, v5);
const v35 = -4294967295 instanceof F0;
v4.length = 0;
function F37(a39, a40) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v28;
    this.f = a39;
}
const v41 = new F37(v35, v26);
new F37(v41, v27);
new F37(-1197437674, v26);
