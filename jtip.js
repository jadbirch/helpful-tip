// function jtip(object) {
// 	for(var key in object) {
// 			$(document).ready(function() {
// 				$("*:contains('" + key + "')").each(function() {
// 					$(this).attr("rel", object[key]);
// 				});
// 		}
// 	}
// }
// function jtip(object) {
// 	for(var key in object) {
// 		$(document).ready(function() {
// 			$("a:contains('" + key + "')").each(function() {
// 				$(this).attr("rel", object[key]);
// 			});
// 		});
// 	}
// }
function jtip(inf, sel, id, object) {
	$(document).ready(function() {
	for (var definition in object) {
		if(object.hasOwnProperty(definition)) {
			$("a:contains('" + definition +  "')").attr(inf, object[definition]).attr(sel, id);
		}}
	});

}