function f6() {
    return "isSafeInteger";
}
const v7 = [-1];
const v8 = ["object",-1,"object",f6,f6];
const v9 = [f6];
try { v9.reverse(); } catch (e) {}
delete v7?.length;
const v15 = v8.__proto__;
f6[4] = "object";
let v16;
try { v16 = v8.sort(f6); } catch (e) {}
v16?.[11];
try { v8.flatMap(v15, -2.220446049250313e-16); } catch (e) {}
