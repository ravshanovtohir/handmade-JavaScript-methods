Array.prototype.myUnshift = function(...elements) {
    let count = elements.length

    for (let i = this.length - 1; i >= 0; i -= 1) {
        this[i + count] = this[i]
    }
    let temp = 0
    for (let i of elements) {
        this[temp] = i
        temp += 1
    }
}