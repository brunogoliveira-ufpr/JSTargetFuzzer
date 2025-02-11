new Uint8ClampedArray(3449);
new Uint32Array(81);
new BigInt64Array(16);
for (const v12 in "dotAll") {
    let v13;
    try { v13 = v12(v12); } catch (e) {}
    (v13 = BigInt64Array) || v12;
    function F15(a17, a18, a19, a20) {
        if (!new.target) { throw 'must be called with new'; }
        this.e = "dotAll";
    }
    new F15("getUTCMinutes", 16, "getUTCMinutes", "dotAll");
    new F15("dotAll", 16, "getUTCMinutes", "undefined");
    new F15("dotAll", 3449, "undefined", "undefined");
}
