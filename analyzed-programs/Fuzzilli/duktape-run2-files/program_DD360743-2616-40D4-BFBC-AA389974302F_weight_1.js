const v10 = new Date();
const v12 = [];
const v14 = Reflect.apply(v10.getUTCSeconds, Date, v12);
let v18;
try { v18 = v14(...Date, ...-9007199254740991, ...v12, 2147483648n, -9007199254740991); } catch (e) {}
2.220446049250313e-16 instanceof v18;
v10 << Reflect;
