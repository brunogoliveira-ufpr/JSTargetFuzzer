function f3(a4, a5) {
    const o15 = {
        o(a7) {
            this[1773] = this;
            a7 /= 4096;
            return a5;
        },
        toString(a9, a10) {
            return a5;
        },
    };
    return o15;
}
f3(-8352, 4096);
f3(-8352, -8352);
const v18 = f3(4096, -7899);
class C19 extends f3 {
    static set h(a21) {
        super.g = f3;
    }
    #toString(a23, a24) {
        function f25(a26, a27) {
            a26[1] = a24;
        }
        const v29 = new Promise(f25);
        return v29;
    }
}
new C19();
const v31 = new C19();
new C19();
Object.defineProperty(v18, "d", { set: f3 });
v18.d = -7899;
const v33 = (a34, a35, a36, a37) => {
    a34.__proto__ = a36;
    C19.valueOf = a34;
    return a36;
};
4096 != v31;
v31[Symbol.species];
