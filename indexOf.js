Array.prototype.myIndexOf = function(element, startIndex) {
    var index = startIndex ? startIndex : 0;
    // this.forEach(item => {
    //     if(item === element) {
    //         return item;
    //     }
    // })
    for(let i = index ; i<this.length; i++) {
        if(this[i] === element) {
            return i;
        }
    }
    return -1;
}


console.log(arr.indexOf(3))
console.log(arr.myIndexOf(3))
console.log(arr.indexOf(6, 3))
console.log(arr.myIndexOf(6, 3))
console.log(arr.indexOf(7))
console.log(arr.myIndexOf(7))