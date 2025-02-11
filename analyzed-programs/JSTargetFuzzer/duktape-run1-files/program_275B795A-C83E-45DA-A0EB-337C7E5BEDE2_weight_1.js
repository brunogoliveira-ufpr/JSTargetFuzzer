const v7 = new Date();
Date["UTC"](1, -1734622718, -4294967297, 1, -4294967297, 9223372036854775807, -65535);
let {"e":v13,"h":v14,} = v7;
let v15 = 0;
while (v15 < 6) {
    delete v7[-1734622718 & -1734622718];
    const t5 = "UTC";
    t5.__proto__ = "UTC";
    try { v7.setMilliseconds(-65535); } catch (e) {}
    v15++;
}
