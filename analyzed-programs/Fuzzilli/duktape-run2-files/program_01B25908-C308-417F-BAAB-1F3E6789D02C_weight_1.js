function f13() {
    return "f";
}
let [v14,,v15,v16] = "f";
let v17;
try { v17 = ("repeat").charCodeAt(9223372036854775807); } catch (e) {}
try { v16(); } catch (e) {}
Object.defineProperty("f", v17, { writable: true, get: f13 });
const t8 = "o";
delete t8[256];
