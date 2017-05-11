var lists = [];

var action = prompt("What is on your mind?")

while(action !== "quit") {
	if(action === "new") {
		var list = prompt("What do you want to do?")
		addTodo(list);
	} else if (action === "list") {
		console.log("***************");
		lists.forEach(function(todo, i) {
				console.log(i + ": " + todo);
			});
		console.log("***************");
	} else if (action === "delete") {
		var del = prompt("What index you'd want to delete?");
		deleteTodo(del);
	}
	action = prompt("What is on your mind?");
}

console.log("It was nice working for you! Reload to restart");

function addTodo(list) {
	// body...
	lists.push(list);
}

function printTodo() {
	console.log("***************");
	for (var i = lists.length - 1; i >= 0; i--) {
		console.log(i + ". " + lists[i]);
	}
	console.log("***************");
}

function deleteTodo(i) {
	lists.splice(i, 1);
	console.log("TODO is REMOVED");
}