Array.prototype.splice = function(start, deleteCount, ...items) {
    const args = arguments;
    if (arguments.length == 0) {
      return []
    } 
    let _array = []
    let _start = isNaN(+start) ? 0 : +start
    let _count = isNaN(+deleteCount) ? 0 : +deleteCount 
    if (start < 0) {
      _start = this.length + start
    } 
    if (_count < 0) {
      _count = 0
    }
    if (args.length == 1) {
      _count = this.length - _start
    }
    // 这里的目的是将splice之前，之后，以及要插入的项拼合成一个数组，偷个懒直接用slice方法，方式还有很多
    const _a = this.slice(0, _start)
    const _b = this.slice(_start + _count)
    const sp = this.slice(_start, _start + _count);
    const b = _a.concat(items).concat(_b)
  
    this.length = b.length
    if (b.length > 0) {
      for (let i = 0; i <= b.length; i++) {
        if (b[i]) {
          this[i] = b[i]
        }
      }
    }
    return sp
  }