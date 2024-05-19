//your JS code here. If required.
const student =  {
	name: 'Uzer',
	age: 23,
	class: 'BE'
}

Object.prototype.getKeys = function () {
	return Object.keys(this);
}

console.log(student.getKeys());
