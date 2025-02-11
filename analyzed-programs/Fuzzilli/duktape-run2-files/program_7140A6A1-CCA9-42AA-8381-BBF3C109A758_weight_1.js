function f0() {
    const o4 = {
        "h": 1.0,
        ..."bigint",
        [9]: "bigint",
        "a": 1.0,
        [1.0]: 9,
        "g": "bigint",
        "b": 9,
        "e": 9,
        "c": 9,
        "f": 9,
        ["bigint"]: 9,
        "d": 9,
    };
    return o4;
}
const v5 = f0();
f0();
const v7 = f0();
const v8 = [2067972596,40337,1770,48600,4,2147483649,-2147483647,-65536];
const v9 = [128,-2147483647,-15,435794924,-2007043257,-536870912,38098,4096,-10];
const v10 = [268435439,255,65536,884720106,256,-268435456];
function* f17(a18, a19, a20, a21) {
    a19[v9] = v10;
    try { new a19(..."1073741823", a20, v7, a20); } catch (e) {}
    yield* a19;
    return f0;
}
f17(14, v8, v5, "bigint");
("bigint")[v9];
let v25;
try { v25 = v8.toLocaleString(); } catch (e) {}
("bigint")[v25];
