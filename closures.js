function fn1() {
    var a = 2;
    function fn2() {
        console.log(a);
    }
    fn2();
}
var x = fn1();
console.log(x);