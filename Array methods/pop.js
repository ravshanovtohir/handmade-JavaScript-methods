Array.prototype.myPop = function() {
    let temp = this[this.length - 1]
    this.length -= 1
    return temp
}