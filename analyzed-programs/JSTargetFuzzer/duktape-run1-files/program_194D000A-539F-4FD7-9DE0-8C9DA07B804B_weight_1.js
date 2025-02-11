function f0() {
}
const v3 = new Float32Array(3567);
const v6 = new Int16Array(127);
new Uint32Array(11);
Object.defineProperty(v6, "b", { writable: true, get: f0, set: f0 });
for (let v10 = 0; v10 < 32; v10++) {
    v6["p" + v10] = v10;
}
try { new f0(...v6, 3567, f0, ...127); } catch (e) {}
v3[Symbol.toPrimitive];
