function f0() {
}
function f1() {
    return f0;
}
function f2(a3, a4) {
    const o20 = {
        get b() {
            function f6() {
                return this;
            }
            return f6;
        },
        [f0]: f1,
        "d": f0,
        "f": a3,
        [f0](a8) {
            let v7 = this;
            if (a8) {
                a4 = a8;
                a8 << a8;
                let v12 = !v7;
                v7++;
                const v14 = --v12;
                Math.fround(v12);
                Math.expm1(v14);
            } else {
            }
            return a8;
        },
    };
    return o20;
}
const v21 = f2(f2, f2);
const v22 = f2(f1, f2);
const v23 = f2(v22, f2);
class C24 {
    static toString(a26, a27, a28) {
        const t38 = "d";
        const t39 = "o";
        t39.length = delete t38?.length;
        const v33 = ["cafGQ","o",f1,f2];
        const v34 = [v33,v21,"o",v33,v33];
        [v34,v23,a27,v23];
        return v34;
    }
    #d;
    a;
    [v21];
    #b;
}
const v36 = new C24();
const v37 = new C24();
new C24();
function f39() {
    return v21;
}
const v40 = -Infinity;
function f43() {
    return 0.5146701952343922;
}
Object.defineProperty(v37, v22, { writable: true, enumerable: true, get: f0 });
let v44;
try { v44 = v36.o(f2, f2, v23, f0, f39); } catch (e) {}
if (f2 < f39) {
    let {"a":v46,"d":v47,"h":v48,} = v36;
} else {
    v23 >= v44;
}
try { f2(f39, v36, f1, ...v40); } catch (e) {}
