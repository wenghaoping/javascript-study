function permutation(str) {
  function R(set) {
    if (set.size === 1) {
      return [set.values().next().value];
    }
    return flattern(
      [...set].map((char) => {
        return R(remove(set, char)).map((perm) => char + perm);
      })
    );
  }
  return R(new Set([...str]));
}

function flattern(array) {
  if (!Array.isArray(array)) {
    return array;
  }
  return [].concat(...array.map(flattern));
}
function remove(set, i) {
  const newSet = new Set([...set]);
  newSet.delete(i);
  return newSet;
}

console.log(permutation("abc"));
// [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
