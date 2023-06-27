function hasOddNumber(arr) {
	return arr.some(function (num) {
		return num % 2 == 1;
	});
}

function hasAZero(bigNumber) {
	const number = bigNumber + "";
	return Array.from(number).some(function (num) {
		return num === "0";
	});
}

function hasOnlyOddNumbers(arr) {
	return arr.every(function (num) {
		return num % 2;
	});
}
// citation start
// https://flexiple.com/javascript/find-duplicates-javascript-array/
// citation end
function hasNoDuplicates(arry) {
	let resultToReturn = false;
	// call some function with callback function as argument
	resultToReturn = arry.some((element, index) => {
		return arry.indexOf(element) !== index;
	});
	if (resultToReturn) {
		return false;
	} else {
		return true;
	}
}

function hasCertainKey(arr, key) {
	return arr.every((val) => {
		return key in val;
	});
}
// let arr = [
//     {title: "Instructor", first: 'Elie', last:"Schoppik"},
//     {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
//     {title: "Instructor", first: 'Matt', last:"Lane"},
//     {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
//   ]

//   hasCertainValue(arr,'title','Instructor') // true
//   hasCertainValue(arr,'first','Elie') // false
function hasCertainValue(arr, key, doesExist) {
	return arr.every(() => {
		return val[key] === doesExist;
	});
}
