new Array(2);
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a5;
}
const v6 = new F3(2);
new F3(Array);
const v8 = new F3(F3);
const v9 = [v8];
const v10 = [v6,v9];
[v6,v9,v10];
const v12 = `
    v10 << v10;
`;
eval(v12);
Object.defineProperty(v10, "a", { writable: true, set: Array });
new Int16Array(645);
new Uint8Array(16);
new Uint16Array(430);
