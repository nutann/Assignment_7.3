


function counter() {
	var count = 0;;

	return function(){
		return ++count;
	}
	
}

var countfunc = counter();

var count = countfunc();
count = countfunc();
count = countfunc();
count = countfunc();

console.log("count = " +count);

