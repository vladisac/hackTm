!function(a) {

	var b="embedly-platform", c="script";
	
	if(!a.getElementById(b)){

		var d = a.createElement(c);
		d.id = b,
		d.src = ("https:"===document.location.protocol?"https":"http")+"://cdn.embedly.com/widgets/platform.js";

		var e = document.getElementsByTagName(c)[0];
		e.parentNode.insertBefore(d,e)
	}
}(document);
