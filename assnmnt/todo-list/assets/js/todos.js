//Mark todos as done
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
})

//Remove todos from list
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

//Grab new todos from input box
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13) {
		//grabbing new todo text from input
		todoText = $(this).val();
		//create new li
		$("ul").append("<li> <span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
		$(this).val("");
	}
})


$(".fa-plus").on("click", function() {
	$("input").fadeToggle();
})