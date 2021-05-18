const _get = function(obj, path, defaultValue = '') {
    const paths = path.replace(/\[/g, '.').replace(/\]/g, '').split('.');
    console.log(paths);
    let result = obj;
    while (paths.length) {
        const key = paths.shift();
        if (key) {
            result = result[key];
            if (!result) {
                return defaultValue;
            }
        }
    }
    return result;
}
// const _get = function(obj, path, defaultValue = '') {

// }
// console.log(_get({ a: [{ b: [{c: 2}] }]}, 'a[0].b[0].c', 3));
// console.log(_get({ a: [[{c: 4}] ]}, 'a[0][0].c', 3));
const object = { 'a': [{ 'b': { 'c': 3 } }] }; // path: 'a[0].b.c'
const array = [{ "a": { b: [1] } }]; // path: '[0].a.b[0]'
console.log(_get(object, 'a[0].b.c', 'null'));
console.log(_get(array, '[0].a.b[0]', 'null'));