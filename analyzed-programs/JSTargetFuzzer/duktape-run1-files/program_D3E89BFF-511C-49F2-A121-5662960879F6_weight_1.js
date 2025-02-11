function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 127;
    this.b = 127;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v5,v5,v4];
const v7 = [v3];
[F0];
for (const v12 of v6) {
    const v13 = [F0,v12,v7];
    [v12];
    [v13];
}
new Map();
delete v7[127];
try { v7.slice(1073741823, 35493); } catch (e) {}
1073741823 === v5 ? 1073741823 : v5;
