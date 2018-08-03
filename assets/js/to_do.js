$("ul").on("click","li",function(){
	$(this).toggleClass("selected");
});

$("input").on("keypress",function(event){
	if(event.which === 13){
		var inText = $(this).val();
		console.log(inText); 
		$(this).val("") ;
		$("ul").append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> '+inText+' </li>');	
	}
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("span").fadeOut();

// $("li").mouseOver({
// 	$("span").slideUp();
// });