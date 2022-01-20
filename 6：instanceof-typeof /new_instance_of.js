function new_instance_of(leftVaule, rightVaule) {
  let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
  leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
  while (true) {
    if (leftVaule === null) {
      return false;
    }
    if (leftVaule === rightProto) {
      return true;
    }
    leftVaule = leftVaule.__proto__;
  }
}

function instanceOf(left, right) {
  if (typeof left !== "object" || left === null) {
    return false;
  }
  while (true) {
    if (left === null) {
      return false;
    }
    // 取左表达式的__proto__值
    // 取右表达式的 prototype 值
    if (left.__proto__ === right.prototype) {
      return true;
    }
    left = left.__proto__;
  }
}
