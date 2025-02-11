function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = "race";
    this.a = a6;
}
const v7 = new F3("race", "race");
const v8 = new F3("8wqXq", "-2147483647");
const v9 = new F3("-2147483647", "-2147483647");
function f10() {
    return v9;
}
const v11 = [v9,"race"];
const v12 = [v9];
[v9,"8wqXq",F3,v12,v8];
Object.defineProperty(v9, "g", { writable: true, get: f10 });
v11[-1] %= -2147483648;
v7[19] = v12;
new F3("8wqXq", "8wqXq");
