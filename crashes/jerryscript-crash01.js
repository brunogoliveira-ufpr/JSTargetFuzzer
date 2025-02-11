class C0 {
    constructor(a2, a3) {
        class C5 extends this.constructor {
        }
        new C5();
    }
}
new C0();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
// 
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/debug/FuzzilliCli --profile=jerryscript --use-read-write --use-functions --use-math --use-object-array /home/kali/PhD/JSEs/jerryscript/build/bin/jerry --resume --storagePath=./crashes-jerry
// TARGET ARGS: /home/kali/PhD/JSEs/jerryscript/build/bin/jerry --reprl-fuzzilli
// CONTRIBUTORS: ClassStaticPropertyGenerator, ClassDefinitionGenerator, ClassConstructorGenerator, ArrayGenerator, InputMutator, ClassInstancePropertyGenerator, BuiltinObjectInstanceGenerator, UpdateGenerator, BinaryOperationGenerator, ClassStaticElementGenerator, ClassStaticComputedPropertyGenerator, FloatArrayGenerator, ClassInstanceElementGenerator, ImitationGenerator
// EXECUTION TIME: 44ms
