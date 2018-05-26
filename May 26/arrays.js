var arr = [1,2,3,4,5];

// map returns a new array of same length and elements which are return from callback function
arr.map(function(element, index, array){
    return 'hello';
})
// returns a new array of same length with all elements as hello

arr.reduce(function(sum, element){
	return sum + element;
}, 10)
// returns 25
arr.reduce(function(sum, element){
	return sum * element;
}, 1)
//returns 120