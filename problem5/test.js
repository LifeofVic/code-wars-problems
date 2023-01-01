function createPhoneNumber(numbers) {
	let phoneNumber = '(xxx) xxx-xxxx';

	for (let i = 0; i < numbers.length; i++) {
		phoneNumber = phoneNumber.replace('x', numbers[i]);
	}

	return phoneNumber;
}

//createPhoneNumber([1,2,3,4,5,6,7,9,0]);
//createPhoneNumber([0,9,8,7,6,5,4,3,2,1]);
//createPhoneNumber([5,5,5,5,5,5,5,5,5,5]);
