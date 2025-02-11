function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a6;
}
new F3(0n, 0n);
new F3(38885n, 1073741825n);
new F3(1073741825n, 38885n);
new Uint16Array(7);
new BigInt64Array(5);
new BigInt64Array(3822);
const v26 = +4;
const v27 = ~-604026570;
1073741825n + 0.3178797805183846;
v26 >> v27;
Math.sign(v26 + 0.3178797805183846);
