Array.prototype.myShift = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }
    --this.length;
    return this
}