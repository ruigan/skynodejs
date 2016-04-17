// node.js read file
'use strict';

var fs = require('fs');

function myReadFile(filename) {
	fs.readFile(filename, 'utf-8', function(err, data) {
		if (err) {
			console.log(err);
		} else {
			console.log(data);
		}
	});

	var data = fs.readFileSync(filename, 'utf-8');
	console.log('readFileSync, ' + data);
}


function myWriteFile(filename) {
	var data = 'This is the data that I want to write to text file.';
	fs.writeFile(filename, data, function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log('write complete!');
		}
	});
}

function getFileStat(filename) {
	fs.stat(filename, function(err, stat) {
		if (err) {
			console.log(err);
		} else {
			console.log('isFile:' + stat.isFile());
			console.log('isDirectory:' + stat.isDirectory());
		}
	});
}




myReadFile('input.txt');
myWriteFile('output.txt');