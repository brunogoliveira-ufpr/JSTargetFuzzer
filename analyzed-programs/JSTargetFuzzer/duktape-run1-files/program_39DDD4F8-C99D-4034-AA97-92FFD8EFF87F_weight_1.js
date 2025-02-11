function f1() {
    const o15 = {
        616: null,
        "h": null,
        set e(a3) {
            const v5 = Symbol.iterator;
            const o14 = {
                [v5]() {
                    let v7 = 10;
                    const o13 = {
                        next() {
                            v7--;
                            const v11 = v7 == 0;
                            const o12 = {
                                "done": v11,
                                "value": v7,
                            };
                            return o12;
                        },
                    };
                    return o13;
                },
            };
        },
    };
    return o15;
}
const v16 = f1();
f1();
f1();
[1073741825n,v16,-8.208505082651115,0.9580686421581758,f1];
const v32 = new f1();
function f33(a34, a35) {
    const o36 = {
        "e": v32,
    };
    return o36;
}
f33(5, 1000000000.0);
f33(4294967295, 0.9580686421581758);
f33(5, 1000000000.0);
