(() => {
  let key1 = {},
    key2 = {},
    map = new WeakMap([
      [key1, 'Hello'],
      [key2, 42],
    ]);

  console.log(map.has(key1));
  console.log(map.get(key1));
  console.log(map.has(key2));
  console.log(map.get(key2));

  let wM = new WeakMap();
  wM.set({}, 1);

  var Person = (function () {
    var privateData = {},
      privateId = 0;

    function Person(name) {
      Object.defineProperty(this, '_id', { value: privateId++ });

      privateData[this._id] = {
        name: name,
      };
    }

    Person.prototype.getName = function () {
      console.log('this._id', this._id);
      return privateData[this._id].name;
    };
    return Person;
  })();

  let p = new Person('kkdosk');
  let p2 = new Person('oskkd');

  console.log(p.getName());
  console.log(p2.getName());
})();

(() => {
  const Person = (function () {
    let privateData = new WeakMap();
    function Person(name) {
      privateData.set(this, { name: name });
    }

    Person.prototype.getName = function () {
      return privateData.get(this).name;
    };

    return Person;
  })();

  const p1 = new Person('kkdosk');
  const p2 = new Person('jej');

  console.log(p1.getName());
  console.log(p2.getName());
})();
