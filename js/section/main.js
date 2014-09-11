$( function() {
	$("header").html(headerTemplate());
	$("header").append(menuTemplate({options: mainMenuOptions}));

	$("footer").html(footerTemplate({options: footerMenuOptions}));
});