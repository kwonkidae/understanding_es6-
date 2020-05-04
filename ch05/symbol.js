(() => {
  // 'use strict';
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
