Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result[result.length] = callback(this[i], i, this)
    }
    return result
}