const v4 = new WeakMap();
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = WeakMap;
    this.d = a7;
}
new F5(8.117737577042142);
const v9 = new F5(8.798204359088382e+306);
const v10 = new F5(8.117737577042142);
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a16;
    this.d = 8.117737577042142;
}
const v17 = new F11(v10, 8.117737577042142, v9, v4);
new F11(v9, 8.117737577042142, v9, v17);
const v19 = new F11(v9, 8.798204359088382e+306, v9, F11);
delete v17[0];
("E").length;
const o25 = {
};
new Proxy(v19, o25);
("E")[Symbol.species];
