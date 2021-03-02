// typeof 一般被用于判断一个变量的类型，
// 我们可以利用 typeof 来判断number,  string,  object,  boolean,  function, undefined,  symbol 这七种类型，
// 这种判断能帮助我们搞定一些问题，比如在判断不是 object 类型的数据的时候，
// typeof能比较清楚的告诉我们具体是哪一类的类型。
// 但是，很遗憾的一点是，typeof 在判断一个 object的数据的时候只能告诉我们这个数据是 object, 而不能细致的具体到是哪一种
let s = new String('abc');
typeof s === 'object'// true
s instanceof String // true

// 要想判断一个数据具体是哪一种 object 的时候，我们需要利用 instanceof 这个操作符来判断，这个我们后面会说到。