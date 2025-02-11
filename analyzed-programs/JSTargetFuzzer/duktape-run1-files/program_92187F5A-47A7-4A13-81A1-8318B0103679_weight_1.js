const v2 = new Uint32Array(136);
const v5 = new Uint8ClampedArray(1254);
const v8 = new Int8Array(1024);
const v9 = [Uint32Array,v8,1024,136,Uint8ClampedArray];
const v10 = [v2,v5,v9,1024,v9];
const v11 = [v5];
function* f13(a14, a15, a16) {
    const v18 = [a16];
    Reflect.apply(a15.toLocaleString, v11, v18);
    yield* a16;
    return a15;
}
f13(1024, this, v10);
