function f0() {
    const o4 = {
        "c": 1e-15,
        "f": 1e-15,
        "b": -256,
        [1e-15]: -256,
        "a": 0.9745083329250813,
        7: 0.9745083329250813,
        ...0.9745083329250813,
        [-256]: 1e-15,
        "e": -256,
        "d": 1e-15,
        [0.9745083329250813]: 0.9745083329250813,
        "g": -256,
    };
    return o4;
}
f0();
const v6 = f0();
f0();
let v17;
try { v17 = v6.valueOf(); } catch (e) {}
try { v6.setUTCSeconds(-9223372036854775808n); } catch (e) {}
Object.defineProperty(v17, 536870889, { writable: true, configurable: true, value: 536870912n });
const v20 = Symbol.toPrimitive;
const o25 = {
    [v20]() {
        return 238378148;
    },
};
