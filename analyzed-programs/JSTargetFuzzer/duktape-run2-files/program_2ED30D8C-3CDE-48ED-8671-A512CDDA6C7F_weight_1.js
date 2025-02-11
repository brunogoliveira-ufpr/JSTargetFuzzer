function f7() {
    return 10000;
}
const v8 = [-2147483647n,6,6,55710n,-365382736n];
[55710n,v8,v8,v8];
[f7,-2147483647n,v8,6,-365382736n];
for (let v15 = 0; v15 < 30; v15++) {
    const t7 = "o";
    t7[65536] = v15;
}
const o16 = {
    "defineProperty": f7,
    "isExtensible": f7,
};
const v18 = new Proxy(v8, o16);
for (let v19 = 0; v19 < 32; v19++) {
    v18["p" + v19] = v19;
}
