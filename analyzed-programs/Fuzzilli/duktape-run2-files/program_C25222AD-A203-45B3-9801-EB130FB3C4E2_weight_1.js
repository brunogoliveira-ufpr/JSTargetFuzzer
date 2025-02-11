function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 128;
    this.d = 128;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
[v5,v5];
[v4,F0,[v3,F0,v3]];
[1073741824,10,65536];
[8,65537,10];
[-9007199254740992,536870888,65536];
const v16 = [-2];
const v17 = [127];
function f18(a19, a20, a21, a22) {
    const o29 = {
        valueOf(a24, a25, a26) {
            const o28 = {
                "maxByteLength": 2933,
            };
            return a21;
        },
    };
    return o29;
}
const v30 = f18();
const v33 = [f18(v16, f18, v17, v30),-2];
const v35 = Reflect.apply(v17.indexOf, v30, v33);
Reflect[2] = v30;
const v37 = Symbol.split;
const v38 = v30[v37];
try { v35(); } catch (e) {}
try { v16.find(v38, v37); } catch (e) {}
