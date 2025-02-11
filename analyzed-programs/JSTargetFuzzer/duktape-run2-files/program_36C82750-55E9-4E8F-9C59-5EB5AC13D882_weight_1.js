const v8 = new Int8Array(2);
const v11 = new BigInt64Array(512);
const v14 = new Int32Array(1836);
class C15 extends Int8Array {
    static [v8];
    a;
    static [v11];
}
new C15();
new C15();
new C15();
v8.__proto__ = v14;
delete v14?.length;
