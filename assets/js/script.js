// check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// adding new Todo
$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		// grabbing new todo text from input
		var todoText = $(this).val();
		//empting input text
		$(this).val("");

		//create new li and add to ul
		$("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</li>");


	}
});

// toggling the form
$(".fa-pencil-square-o").click(function(){
	$("input[type='text']").fadeToggle();
});