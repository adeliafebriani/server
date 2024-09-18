function print(num) {
	for (let i = 1; i <= num; i++) {
		console.log(i);
	}
}

function echo(say) {
	console.log(say);
}

module.exports = { print, echo };


// to print any thing
// print(5);
// console.log(module);

// export is an object.print(function)
// module.exports.print = print;
// module.exports.echo = echo;
// same as == 
// module.exports={print, echo};