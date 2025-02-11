function f0() {
}
const v4 = ["string"];
const v5 = ["p","string",f0,f0];
const v6 = [v5,v5,v4,v5,v5];
v4.length;
for (const v14 of v6) {
    const o15 = {
        "apply": f0,
        "construct": f0,
        "defineProperty": f0,
        "getOwnPropertyDescriptor": f0,
        "getPrototypeOf": f0,
        "has": f0,
        "isExtensible": f0,
        "ownKeys": f0,
    };
    new Proxy("p", o15);
}
