(() => {
  let values = [1, 2, 3];
  let iterator = values[Symbol.iterator]();

  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());

  function isIterable(object) {
    return typeof object[Symbol.iterator] === 'function';
  }
  console.log(isIterable([1, 2, 3]));
})();
