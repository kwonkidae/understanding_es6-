/*jshint esversion: 6 */

var colors = ["red", "green", "blue"];

for (var i = 0, len = colors.length; i < len; i++) {
	console.log(colors[i]);
}

(()=>{
	function createIterator(items) {
		var i = 0;
		return {
			next: function() {
				var done = (i >= items.length);
				var value = !done ? items[i++] : undefined;

				return {
					done,
					value
				};
			}
		};
	}

	var iterator = createIterator([1,2,3]);
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
	let a = [1,2,3];
	console.log(...a);
})();