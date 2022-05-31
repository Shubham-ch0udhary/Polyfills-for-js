//Polyfill for map function
Array.prototype.myMap = function(fn) {
    var result = [];
    this.forEach((item)=> {
        result.push(fn(item))
    })
    return result;
}

var arr = [2,4,6,8];
console.log(arr.myMap(item => item *2))
console.log(arr.map(item => item *2))

