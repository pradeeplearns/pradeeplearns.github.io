var where = prompt("Are we there yet?");

while (where.indexOf("yes") === -1) {
	var where = prompt("Are we there yet?");
}

alert("Yayy! We made it!");