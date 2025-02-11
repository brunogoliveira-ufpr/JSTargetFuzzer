("m")["replace"]("NEGATIVE_INFINITY", "NEGATIVE_INFINITY") < "POSITIVE_INFINITY";
function f18(a19, a20) {
    function F21(a23, a24, a25) {
        if (!new.target) { throw 'must be called with new'; }
        this.d = 1000000000000.0;
        this.b = "replace";
    }
    new F21(a19, "m", -2147483647n);
    new F21(1024n, "NEGATIVE_INFINITY", -2147483647n);
    new F21(4n, "replace", 1024n);
    return "replace";
}
f18(1000, -1000000000.0);
