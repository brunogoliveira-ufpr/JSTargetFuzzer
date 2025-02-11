const o12 = {
    [12]: 9,
};
const t3 = "string";
t3.__proto__ = "toString";
const v13 = `
    try {
    const t0 = 9;
    t0("toString", "MAX_VALUE", 12, 196056953, v13);
    } catch (e) {}
`;
eval(v13);
