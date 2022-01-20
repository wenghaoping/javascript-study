const jsonObj = {
  'ab_cd_ef': 1,
  'ab_qd_zf': {
    'gh_ij_kl': 2,
    'ab_cd_ef': 1
  }
};
const jsonObj2 = {
  'abDdEf': 1,
  'abQdZf': {
    'ghIjKl': 2,
    'abCdEf': 1
  }
};

function rever(obj) {
  for(let key in obj) {
    obj[camelCase(key)] = isObject(obj[key]) ? rever(obj[key]) : obj[key];
    delete obj[key];
  }
  return obj;
};
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
function camelCase(source) {
  if (source) {
      return source.replace(/_([a-zA-Z])/g, function (g) {
          return g[1].toUpperCase();
      });
  }
  return '';
}
console.log(rever(jsonObj));
