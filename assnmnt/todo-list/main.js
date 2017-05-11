// $("input").on("input", function() {
// 	console.log(this.which);
// 	var inputText = this.value;
// 	if(this.keyCode === 13) {
// 		console.log("entered");
// 	}

// 	$("ul").html("<li>" + inputText + "</li>");
// })

$("input").on("keypress", function() {
	if(event.keyCode === 13) {
		var inputText = $(this).val();
		$("<li class='todo'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span> " + inputText + "</li>").appendTo("ul");
		$(this).val("");
	}
});

$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
})

$("ul li").on("mouseover", "span", function() {
	$(this).toggleClass("icon");
})

$("ul li").on("mouseleave", "span", function() {
	$(this).toggleClass("icon");
})
