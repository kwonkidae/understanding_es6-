(() => {
  // 'use strict';
  return;
  let firstName = Symbol('first name');

  let person = {
    [firstName]: 'Nicholas',
  };

  Object.defineProperty(person, firstName, { writable: false });
  console.log(person);

  let lastName = Symbol('last name');

  Object.defineProperties(person, {
    [lastName]: {
      value: 'Zakas',
      writable: false,
    },
  });

  console.log(person[lastName]);
})();

(() => {
  return;
  let uid = Symbol.for('uid');
  let object = {};

  object[uid] = '12345';

  console.log(object[uid]);
  console.log(uid);
})();

(() => {
  return;
  let uid = Symbol.for('uid');
  let object = {
    [uid]: '12345',
  };

  console.log(object[uid]);
  console.log(uid);

  let uid2 = Symbol.for('uid');
  console.log(uid === uid2);
  console.log(object[uid2]);
  console.log(uid2);
})();

(() => {
  return;
  let uid = Symbol.for('uid');
  console.log(Symbol.keyFor(uid));

  let uid2 = Symbol.for('uid');
  console.log(Symbol.keyFor(uid2));

  let uid3 = Symbol('uid');
  console.log(Symbol.keyFor(uid3));

  let desc = String(uid);
  console.log(desc);

  desc = uid + '';
})();

(() => {
  let uid = Symbol.for('uid');
  let object = {
    [uid]: '12345',
  };

  let symbols = Object.getOwnPropertySymbols(object);

  console.log(symbols.length);
  console.log(symbols[0]);
  console.log(object[symbols[0]]);
})();
