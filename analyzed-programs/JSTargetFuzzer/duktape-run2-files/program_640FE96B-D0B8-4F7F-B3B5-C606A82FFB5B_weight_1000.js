new Float32Array(1000);
const v5 = new Int32Array(16);
const v8 = new Int16Array(3144);
const v12 = 3144 >> v8;
let v13;
try { v13 = Int16Array(v12, 1000, 3144); } catch (e) {}
v5.byteOffset;
switch (0.01413596778607562) {
    case -1.7976931348623157e+308:
        try { v13(); } catch (e) {}
        break;
    default:
        v8.byteOffset;
        break;
}
