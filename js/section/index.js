$( function() {
	$("#countdown").countdown("2014/10/17", function(event) {
		$(this).text(event.strftime('%D zile, %H ore, %M minute, %S secunde'));
	});
});