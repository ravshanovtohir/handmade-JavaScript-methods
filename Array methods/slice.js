Array.prototype.mySlice = function(start = 0, end = this.length) {
    start = isNaN(+start) || +this.length + +start < 0 ? 0 :
        this.length + +start < this.length ? +this.length + +start :
        +start
    end = isNaN(+end) || +this.length + +end < 0 ? 0 :
        +this.length + +end < this.length ? +this.length + +end :
        +end
    let safe = []
    for (; start < end && start < this.length; start++) {
        safe.push(this[start])
    }
    return safe
}