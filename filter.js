Array.prototype.myFilter = function(fn) {
    var result = [];
    this.forEach(item => {
        if(fn(item)) {
            result.push(item)
        }
    })
    return result;
}

arr = [2, 3, 4, 6];
console.log(arr.myFilter(item => item %2 === 0))
console.log(arr.filter(item => item %2 === 0))