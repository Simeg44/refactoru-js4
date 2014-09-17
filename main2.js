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

// var relocate = function() {
// 	return ($(this).closest(".people");
// };

$(document).on('ready', function() {
	$('.people').on('click', 'button', function(e) {
		e.preventDefault();
		// var phone = $(this).closest(".people").find("#phoneNum").val();
		
		victims.names.push($(this).closest(".people").find("#name").val());
		victims.number.push($(this).closest(".people").find("#phoneNum").val());
		victims.street.push($(this).closest(".people").find("#street").val());

		victims.total++;

		console.log(victims);

		$('.people').hide();
		$('.more-ppl').show();
	});

	$('.more-ppl').on('click', '.more', function(e) {
		e.preventDefault();
		$('.people').show();
		$('.more-ppl').hide();
	});

	$('.more-ppl').on('click', '.done', function(e) {
		e.preventDefault();
		$('.more-ppl').hide();
		$('.entry-change').show();
	});
})


// $(document).ready(function() {
// 	$(".btn").click(function() {
// 		console.log('working');
	
// 	})
	
// })
/*var name = $(this).closest(".people").find("#name").val();
		victims.names.push(name);
		// victims.number.push.val($("#phoneNum"));
		// victims.street.push.val($("#street"));
		victims.total++;

		console.log(victims.names);*/