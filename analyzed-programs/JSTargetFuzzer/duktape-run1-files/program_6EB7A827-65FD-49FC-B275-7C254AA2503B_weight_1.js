function f0() {
    const o9 = {
        __proto__: "function",
        4294967295: "function",
        ["490851381"]: "function",
        n(a5, a6) {
            try { new a5(this); } catch (e) {}
            return a6 << a5;
        },
        3: -5.860571135981904e+307,
        "f": "function",
    };
    return o9;
}
f0();
f0();
f0();
function f16() {
    return -4096n;
}
const v22 = typeof f0 === "bigint";
function f23() {
    new f0();
    return arguments;
}
const v26 = f23(-209088400n, f23, -209088400n, f23, 0n);
try { v26.UTC(v22, -209088400n, "bigint"); } catch (e) {}
