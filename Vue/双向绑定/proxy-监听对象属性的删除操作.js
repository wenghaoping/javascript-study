let observeStore = new Map();

function makeObservable(target) {
  let handlerName = Symbol("handler");
  observeStore.set(handlerName, []);
  target.observe = function (handler) {
    observeStore.get(handlerName).push(handler);
  };

  const proxyHandler = {
    get(target, property, receiver) {
      if (typeof target[property] === "object" && target[property] !== null) {
        return new Proxy(target[property], proxyHandler);
      }
      let success = Reflect.get(...arguments);
      if (success) {
        observeStore
          .get(handlerName)
          .forEach((handler) => handler("GET", property, target[property]));
      }
      return success;
    },
    set(target, property, receiver) {
      let success = Reflect.set(...arguments);
      if (success) {
        observeStore
          .get(handlerName)
          .forEach((handler) => handler("SET", property, target[property]));
      }
      return success;
    },
    deleteProperty(target, property) {
      let success = Reflect.deleteProperty(...arguments);
      if (success) {
        observeStore
          .get(handlerName)
          .forEach((handler) => handler("DELETE", property, target[property]));
      }
      return success;
    },
  };
  return new Proxy(target, proxyHandler);
}

let user = {};

user = makeObservable(user);

user.observe((action, key, value) => {
  console.log(`${action} key=${key} value=${value || ""}`);
});
user.name = "John"; // SET key=name value=John
console.log(user.name); // GET key=name value=John // John
delete user.name; // DELETE key=name value=
