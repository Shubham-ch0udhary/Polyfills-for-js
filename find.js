Array.prototype.myFind = function(fn) {
    for(let i =0; i <this.length; i++) {
        if(fn(this[i])) {
            return this[i];
        }
    }
}

arr = [2, 3, 4, 6];
console.log(arr.myFind(item => item %2 === 0))
console.log(arr.find(item => item %2 === 0))