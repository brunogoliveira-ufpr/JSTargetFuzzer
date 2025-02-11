const v1 = new Date();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v1;
}
new F2(Date, F2);
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v1;
    this.h = Date;
    this.a = Date;
}
new F7(F2, F2);
const v12 = new F7(F7, v1);
new F7(v12, v12);
const v14 = new F2(F2, Date);
const v15 = new F2(F2, v14);
v15[Date] &&= 1989945750;
5 in v15;
[1000.0,1.0,1000000000000.0,113233.73132029572,2.4018453164330844e+307,0.2812877265483178,699692.2686963642,0.4449797078325498,-177.7960036638766,-71.93734808617353];
const v27 = [Infinity,1000.0];
const v28 = [0.8427941388412162,1000.0];
function F32(a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -128;
    a35.a = -65535;
    this.d = v28;
}
const v36 = new F32(v27, -9388);
const v37 = new F32(-128, -65535, v27, v36, v27);
new F32(-9388, -9388);
let v39 = [-2.0,-923665.4923344951,-5.0,-2.220446049250313e-16];
[4.0,1000000000.0,1854.9738623745507,1000000.0,1.0133125141100648e+308,817.8507624335082,0.9328382034819203];
[0.127956716827482,-1e-15,1.4878638031406598e+308];
const v43 = [65537,F32,65537,65537,65537,v39,v37];
let v44 = [65537];
function f45(a46, a47) {
    a46.size = v27;
    let v48 = 268435440;
    try {
        a46[Symbol.toStringTag];
    } catch(e53) {
        e53 &&= 1989945750;
    } finally {
        v48 &= v48;
    }
    ++v44;
    +65537;
    1.7976931348623157e+308 >>> v48;
    1513850008 & ++v39;
    return v39;
}
f45(v43);
