const v3 = [-1000000.0,2.2250738585072014e-308,-9.626180651773012,-4.0];
const v4 = [400963.21727170725,-2.2250738585072014e-308,1e-15,-0.0,-381.21174943301094,0.16609796357157103];
const v5 = [1.7976931348623157e+308];
const v7 = new Map();
const v8 = [4.0,-7.606836890974476,-843552.9499828906,-83424.30838388216,-3.0,1.0,0.9685278298088494,8.557097654710652e+307,1e-15,1.7976931348623157e+308];
const v9 = [-1000000000.0,3.0,0.8088513559981846,-2.2250738585072014e-308,1.2302819969563215e+308,883892.5311040818,1000.0,-2.220446049250313e-16,0.5001891292762559,2.0];
const v10 = [Infinity,-1000000000.0,4.0,1.0,-1000000000.0,2.0];
function f11() {
    return 8n;
}
function f12(a13, a14, a15, a16) {
    const o28 = {
        "h": -16n,
        [v3]: v9,
        __proto__: v9,
        [v4]: v5,
        "e": a16,
        4: a14,
        "b": v4,
        o(a18, a19, a20) {
            function f21() {
                return 8n;
            }
            let [,v22,v23,v24] = v4;
            try { v7.clear(); } catch (e) {}
            v8[Symbol.search] = v8;
            return Map;
        },
    };
    return o28;
}
const v29 = f12(f11, v9, v9, v10);
f12(f12(v7, v8, v10, v5), v29, v9, v10);
v3.length;
f11();
let v36 = v4 >>> 8n;
Math.cos(8n);
let v38 = --v36;
++v38;
v38 << 8n;
const o41 = {
    "apply": f11,
    "call": f11,
    "defineProperty": f12,
    "deleteProperty": f11,
    "get": f11,
    "getPrototypeOf": f11,
    "isExtensible": f12,
    "ownKeys": f11,
    "preventExtensions": f12,
};
new Proxy(v9, o41);
