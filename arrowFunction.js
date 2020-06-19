//========EMPTING AN ARRAY=========//
let numbers = [1, 2, 3, 4];
let another = numbers; 

//Solution 1
// numbers = [];


// console.log(another);

//Solution 2
// numbers.length = 0;

//Solution 3
// numbers.splice(0, numbers.length);\

//Solution 4
// while(numbers.length > 0 )
	// numbers.pop();

console.log(another);
console.log(numbers);





















/*



const obj1 = {a:1, b:2};
const obj2 = {...obj1};

obj1.b = "sdfsdf";

console.log(obj2);



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
*/

