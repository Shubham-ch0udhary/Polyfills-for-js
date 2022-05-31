Array.prototype.myReduce = function(fn, initial) {
    var result;
    this.forEach(item => {
        initial = initial ? fn(item, initial) : item;
    })
    return initial;
}

var arr = [2,3,4,5,6,7,9]

console.log(arr.reduce((a,b) => a*b))
console.log(arr.myReduce((a,b) => a*b))
console.log(arr.reduce((a,b) => a*b, 2))
console.log(arr.myReduce((a,b) => a*b, 2))