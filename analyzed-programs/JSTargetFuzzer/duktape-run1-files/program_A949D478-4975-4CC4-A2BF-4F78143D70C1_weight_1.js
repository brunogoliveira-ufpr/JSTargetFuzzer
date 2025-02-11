const v1 = [true,true,true];
const v2 = [v1,v1,v1,v1];
const v3 = [v2,v1,v1,v1];
function f7(a8, a9, a10, a11) {
    const o16 = {
        ...v2,
        get b() {
            const o13 = {
            };
            new Proxy(this, o13);
            return 4096;
        },
        "d": v3,
        116: a9,
    };
    return o16;
}
f7(v3, 4096, v3, -30038);
const v19 = f7(v2, -30038, v2, f7(v3, 193992041, v1, v2));
function f20(a21, a22, a23) {
    const o24 = {
        __proto__: v3,
        "c": a21,
        [4096]: true,
    };
    return o24;
}
f20(v19, v2, 4096);
f20(f20(v19, v1, 193992041), v2, -30038);
