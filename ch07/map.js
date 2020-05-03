(() => {
  let map = new Map();
  map.set('name', 'Nicolas');
  map.set('age', 25);

  console.log(map.size);
  console.log(map.has('name'));
  console.log(map.get('name'));

  map.delete('name');
  console.log(map.has('name'));
  console.log(map.get('name'));
  console.log(map.size);
})();
