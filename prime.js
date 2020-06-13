 function showPrimes(limit){
 	for(let num = 2; num <= limit; num++) {

 		let isPrime = true;
 		for (let factor = 2; factor < num; factor++) {
			if (num % factor === 0) {
				isPrime = false;
				break;
			}
 		}
 		if (isPrime) console.log(num);
 	}

 }
 //with break it took 6.39 sec to calculate prime numbers between 1 to 1 lakh.
 // without break  38.90 sec.

 // 99991  99989