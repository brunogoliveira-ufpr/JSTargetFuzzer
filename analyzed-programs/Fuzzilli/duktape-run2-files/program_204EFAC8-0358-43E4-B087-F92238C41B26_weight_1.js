const v3 = [65536,-65537,-65537,65536,-65537];
const v4 = [4294967297,v3,-65537,4294967297];
const v5 = [v4,4294967297,65536,v4];
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a8;
}
new F6(v3, v5);
function f11() {
    arguments.length = 65536;
    arguments.d = v5;
    return arguments;
}
f11();
const v14 = new F6(v3, v3);
new F6(v14, v3);
const t16 = Date(Date);
t16.length = 0;
