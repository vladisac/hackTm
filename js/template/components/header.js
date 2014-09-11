var header =

"<div class=\"container\">" +
	"<div class=\"logo\">" +
		"<a href=\"" + appURL + "\">" +
			"<img src=\"assets/logo.png\" height=\"75\" />" +
		"</a>"
	"</div>" +
	/*"<div class=\"search pull-right\">" +
		<form>
			<span class="input-group-addon">
				<button type="submit">
					<span class="glyph-icon glyph-icon-search"></span>
				</button>
			</span>
			<input type="" placeholder="Cautare">
		</form>
	"</div>" +
	"<div class=\"clearfix\"></div>" +*/
"</div>";

var headerTemplate = Handlebars.compile(header);