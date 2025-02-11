/a(?:b)i+/suyd;
const v4 = /(?:a*)*/syvi;
const v5 = /\1\2(a(?:\1(b\1\2))\2)\1*/sydv;
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a8;
    this.f = v4;
}
const v11 = new F6(10, 10, 10);
const v12 = new F6(268435456, 268435456, -256);
new F6(10, 10, 268435456);
v11.g = -256;
if (-5.0) {
    const o17 = {
    };
    new Proxy(v12, o17);
} else {
    try { v12(v4, -995.100774971913, v5, v5, -995.100774971913); } catch (e) {}
}
