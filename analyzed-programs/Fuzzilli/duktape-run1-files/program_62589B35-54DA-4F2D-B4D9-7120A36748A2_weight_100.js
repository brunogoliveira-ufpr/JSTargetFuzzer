function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -9007199254740992;
    this.b = -9007199254740992;
}
const v3 = new F0();
new F0();
new F0();
function f6() {
    return v3;
}
function f7() {
    return f6;
}
function f8() {
    return v3;
}
const v16 = new Int8Array();
([true,true]).length;
true ^ 64;
delete v16[3];
