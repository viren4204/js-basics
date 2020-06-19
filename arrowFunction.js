const courses = [
	{id:1, name: 'a'},
	{id:2, name: 'b'}	
];

const course = courses.find(course => course.name === 'a');
console.log(course);

//==========REMOVING ELEMENTS==========//

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//End
const last = numbers.pop();
console.log(last);

//Beginning
const first = numbers.shift();
console.log(first);

//Middle
numbers.splice(4, 2);
console.log(numbers);

