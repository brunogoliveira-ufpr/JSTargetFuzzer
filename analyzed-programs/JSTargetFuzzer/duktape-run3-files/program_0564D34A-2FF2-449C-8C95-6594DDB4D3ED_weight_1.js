class C3 {
    static #g = 262.8847572465245;
    536870887 = -6.545955154024907e+307;
    o(a5) {
        const v7 = Symbol.iterator;
        const o16 = {
            [v7]() {
                let v9 = 10;
                const o15 = {
                    next() {
                        v9--;
                        const v13 = v9 == 0;
                        const o14 = {
                            "done": v13,
                            "value": v9,
                        };
                        return o14;
                    },
                };
                return o15;
            },
        };
        return a5;
    }
}
const v17 = new C3();
const v18 = new C3();
const v19 = new C3();
const v20 = [-1000000000.0,-4.0];
[1.7976931348623157e+308,-375609.119170996,1e-15,1.463554550308915e+308,-325329.4604644417,1.5558657594901504e+308,0.5352041854692263,-1000000000.0,-1.2517434059316815e+308,6.163241540630217];
const v22 = [-1.2854356131166288e+308,-9.104645297609784,564566.9550027065,264.69484359524404,1000000000.0,0.0,-289624.8699516702,6.088754072317737e+307];
function F23(a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v18;
}
new F23(v18, v20);
new F23(v17, v20);
new F23(v18, v22);
const v31 = Symbol.iterator;
v18[v31];
async function f33(a34, a35) {
    let v36;
    try { v36 = a34.m(a34); } catch (e) {}
    v36 % F23;
    await v17;
    return v36;
}
f33(v31, v19);
