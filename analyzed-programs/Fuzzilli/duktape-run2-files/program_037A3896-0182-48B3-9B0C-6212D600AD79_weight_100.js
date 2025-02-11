function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
    this.g = f0;
    this.c = f0;
}
new F1();
new F1();
new F1();
let v16 = 6;
v16 ||= 16;
if (Int8Array > EvalError) {
    const o24 = {
        "apply": EvalError,
        "call": EvalError,
        "construct": EvalError,
        "defineProperty": EvalError,
        "deleteProperty": EvalError,
        "get": EvalError,
        "getOwnPropertyDescriptor": EvalError,
        "getPrototypeOf": EvalError,
        "has": EvalError,
        "isExtensible": EvalError,
        "preventExtensions": EvalError,
        get h() {
            ("-1509260077" !== v16) instanceof "-1509260077";
            const t27 = "-1509260077";
            t27.length += EvalError * EvalError;
            return "-1509260077";
        },
    };
}
