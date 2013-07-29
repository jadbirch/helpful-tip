function jtip(object) {
	$(document).ready(function() {
	for (var definition in object) {
		if(object.hasOwnProperty(definition)) {
			var div = $("div:contains('" + definition +  "')");
			var divContent = div.html();
			var regex = new RegExp(definition, "g");
			divContent = divContent.replace(regex, "<span title='" + object[definition] + "' class='tip'>" + definition + "</span>");
			div.html(divContent);
		}}
	});
}
