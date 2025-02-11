function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a5;
}
const v6 = new F3(-5.290786503885094);
const v7 = new F3(v6);
const v8 = new F3(v6);
function f9() {
    return v8;
}
function f10(a11, a12, a13) {
    const o23 = {
        o(a15, a16) {
            try { a16(this, this, a15, -5.290786503885094); } catch (e) {}
            const v18 = this ^ a13;
            try { v8.o(v7, v18, v18); } catch (e) {}
            typeof v7 === "object";
            return a11;
        },
        ...v8,
    };
    return o23;
}
f10(1000000000.0, v6, f9);
const v25 = f10(316222.5167111375, v8, -5.290786503885094);
f10(1000000000.0, v25, F3);
const v27 = new F3(v25);
let v29;
try { v29 = v27["p"]("p"); } catch (e) {}
v8[v29];
[-65535,-268435456,255,65536];
[-48068,129,1873977442,-37894,-1073741824];
const v33 = [1073741823,1783696884,49657,-32578,-1284946253];
try { v8["map"](); } catch (e) {}
v25.a = v33;
