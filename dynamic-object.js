const circle = {
	radius: 1,
	draw() {
		console.log('draw');
	}
};

// circle.color = 'yellow';
// circle.draw = function() {}

// delete circle.color; 
// delete circle.draw;

// circle = {};

// console.log(circle);

// for (let key in circle)
// console.log(key, circle[key]);

// for(let entry of Object.entries(circle))
// console.log(entry);

// const circle_02 = {};

//CLONING AN OBJECT.

// for (let key in circle)
// 	circle_02[key] = circle[key];


	// circle_02['radius'] = circle['radius'];

// const circle_03 = Object.assign({
// 	color:'Yellow'
// }, circle);

const circle_04 = { ...circle};
	console.log(circle_03);
}

