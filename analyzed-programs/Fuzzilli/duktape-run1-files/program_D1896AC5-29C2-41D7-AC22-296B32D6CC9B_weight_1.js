function f0() {
    const o6 = {
        ...-256,
        [-256]: 12,
        2147483648: -256,
        [12](a5) {
            this.f = 12;
            Object.defineProperty(this, 42390, { writable: true, configurable: true, enumerable: true, value: a5 });
            return -256;
        },
        "b": -256,
        "g": 42390,
        "d": 42390,
        "c": 12,
        [12]: -256,
        __proto__: 12,
    };
    return o6;
}
const v7 = f0();
const v8 = f0();
const v9 = f0();
class C10 extends f0 {
    static 2;
    static {
        class C12 extends f0 {
            static 4 = this;
            static [v7] = v7;
            static #h = v9;
            255 = v8;
        }
        new C12();
        new C12();
        new C12();
    }
    d;
    #a = v7;
}
new C10();
const v17 = new C10();
new C10();
new Uint8ClampedArray(2288);
new Uint16Array(12);
new BigUint64Array(5);
v17.d -= 5;
try { v17.create(v17, Uint16Array); } catch (e) {}
