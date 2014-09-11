var footer =

"<nav id=\"footer-menu-nav\" class=\"navbar navbar-default\" role=\"navigation\">" +
	"<div class=\"container\">" +
		"<div style=\"position:relative;\">" +
			"<div class=\"navbar-header\">" +
				"<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#footer-menu\" style=\"margin-left:5px; float:left;\">" +
					"<span class=\"sr-only\">Toggle navigation</span>" +
					"<span class=\"icon-bar\"></span>" +
					"<span class=\"icon-bar\"></span>" +
					"<span class=\"icon-bar\"></span>" +
				"</button>" +
			"</div>" +

			//Collect the nav links, forms, and other content for toggling
			"<div class=\"collapse navbar-collapse\" id=\"footer-menu\">" +
				"<div class=\"row\">" +
					"<div style=\"text-align:center;\">" +
						"{{#each options}}" +
							"<div class=\"col-sm-1\" style=\"padding: 13px 0;\">" +
								"<a href=\"" + appURL + "{{url}}\">{{label}}</a>" +
							"</div>" +
						"{{/each}}" +
						"<div class=\"clearfix\"></div>" +
					"</div>" +
				"</div>" +
			"</div>" + // /.navbar-collapse

			"<div style=\"position:absolute; right: 10px; top: 15px\">" +
				"Copyright &copy;HackTM 2014" +
			"</div>" +
		"</div>" +
	"</div>" + // /.container-fluid
"</nav>";

var footerTemplate = Handlebars.compile(footer);