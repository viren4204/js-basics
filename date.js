alert("HI");
const address = {
	vill: 'New pandeydih Basti',
	city: 'Tetulmari',
	zipCode: '828121',
}

function showAddress(address){
	for(key in address)
		console.log(key, address[key]);
}

showAddress(address);


//Factory function
function createAddress(nameOfPerson, vill, city, zipCode) {
	return {
		nameOfPerson,
		vill,
		city,
		zipCode
	};
}

const add2 = createAddress('deepak', 'Shubhash Nagar', 'Tetulmari', 828121);


//Constructor Function
function Address(name, vill, city, zipCode){
	this.name= name,
	this.vill= vill,
	this.city= city,
	this.zipCode= zipCode
}

const add3 = new Address('Raja Babu', 'New Drift No 12', 'Loyabad', 828101);

let add1 = new Address('a', 'b', 'c', 'd');
let add4 = new Address('a', 'b', 'c', 'd');

function areSame(add1, add2){
	return add1 === add2;
}
