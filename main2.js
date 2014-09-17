var victims = {
	total: 0,
	names: [],
	number: [],
	street: []
};

var volunteers = {
	total: 0,
	names: [],
	number: [],
	street: []
};

/*var relocate = function(top, bottom) {
	$(this).
}*/

$(document).ready(function() {
	$(".people").on("click", ".btn", function() {
		var name = $(this).closest(".people").find("#name").val();
		victims.names.push(name);
		// victims.number.push.val($("#phoneNum"));
		// victims.street.push.val($("#street"));
		victims.total++;

		console.log(victims);
	});
	
});