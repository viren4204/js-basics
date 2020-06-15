const circle = {
	radius: 1,
	location: {
		x: 1,
		y: 2
	}, 
	isvisible: true,
	draw: function(){
		console.log('draw');
	}
};

//Factory Function

function createCircle(radius) {
	return {
		radius,
		draw() {
			console.log('draw');
		}
	};
}

const circle1 = createCircle(1);


// Constructor Function 
//to create multiple objects

function Circle(radius) {
	this.radius = radius;
	this.draw = function() {
		console.log('draw constructor function');
	}
}


const circle = new Circle(1);














