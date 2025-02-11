function f0() {
    const o8 = {
        __proto__: "string",
        [NaN]: "string",
        "d": 0.3523536055640786,
        ..."string",
        "g": "string",
        get f() {
            return this;
        },
        [0.3523536055640786]: "string",
        "e": "string",
    };
    return o8;
}
const v9 = f0();
const v10 = f0();
const v11 = f0();
const v12 = [v9,v10,f0,v11];
const v13 = [v12];
const v14 = [v12,f0,v10,v12];
("getFloat32")["l0z"];
const v23 = new Map();
v14.__proto__ = v11;
Object.defineProperty(v13, -1, { configurable: true, set: f0 });
let {"e":v24,"f":v25,...v26} = v11;
v11["RaMmo"] = v25;
let v28;
try { v28 = v26["valueOf"]("valueOf", v26, v14, "l0z"); } catch (e) {}
v28.__proto__ = v23;
