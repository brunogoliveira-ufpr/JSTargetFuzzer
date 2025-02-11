function f3() {
    return "function";
}
["function","function"];
["log",f3,["function","log",f3,"log",f3],"function","function"];
new BigInt64Array(257);
new Int16Array(3);
new BigInt64Array(0);
const o16 = {
    "apply": f3,
    "defineProperty": f3,
    "getPrototypeOf": f3,
    "preventExtensions": f3,
};
const v18 = new Proxy("log", o16);
function f19() {
    return v18;
}
