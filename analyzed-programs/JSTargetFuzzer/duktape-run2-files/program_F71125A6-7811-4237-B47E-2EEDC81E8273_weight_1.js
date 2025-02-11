function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = this;
}
const v6 = new F3(F3);
new F3(v6);
new F3(F3);
[-2.2250738585072014e-308];
const v13 = [-525.2956276855456,0.6190799998983798,-5.0,-0.0,-4.185748892105881,-7.335287034679481];
[1.060620340780016e+308,0.2703439034476157,-1.0,1.0];
const v15 = [-409.6596385122307];
const v16 = [2.0,-116.77494940045176];
const v17 = [880570.41456816,3.0,1.6711390122646802e+308,-0.0,-2.220446049250313e-16,2.2250738585072014e-308];
function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v13;
}
const v27 = new F21(-1329257878, v16, 48247, v16);
new F21(48247, v17, -1329257878, v17);
new F21(v15, -1329257878, 1024, v16);
function f33() {
    function f35() {
        return f35;
    }
    return arguments;
}
const v36 = f33(f33, 48247, v27, v15, 1024);
function f37() {
    return v36;
}
