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

var clear = function() {
	$('.people').find('input[type=text], textarea').val("");
};

var build = function(group) {
	if (group === victims) {
		$('#output-list').append('<h3>Victims</h3>');
		$('#output-list').append("<li><ol id='victims-out'></ol></li>");

		for(i = 0; i < group.total; i++) {
			$('#victims-out').append("<li>" + group.names[i] + " ," + group.number[i] + " ," + group.street[i] + "</li>");
		}
	}
	else {
		$('#output-list').append('<h3>Volunteers</h3>')
		$('#output-list').append("<li><ol id='volunteers-out'></ol></li>");

		for(i = 0; i < group.total; i++) {
			$('#volunteers-out').append("<li>" + group.names[i] + " ," + group.number[i] + " ," + group.street[i] + "</li>");
		}
	}
};

$(document).on('ready', function() {
	$(document).on('click', '#victims button', function(e) {
		e.preventDefault();
		
		victims.names.push($(this).closest(".people").find("#name").val());
		victims.number.push($(this).closest(".people").find("#phoneNum").val());
		victims.street.push($(this).closest(".people").find("#street").val());

		victims.total++;

		console.log(victims);

		$('.people').hide();
		$('.more-ppl').show();
	});

	$(document).on('click', '#volunteers button', function(e) {
		e.preventDefault();
		
		volunteers.names.push($(this).closest(".people").find("#name").val());
		volunteers.number.push($(this).closest(".people").find("#phoneNum").val());
		volunteers.street.push($(this).closest(".people").find("#street").val());

		volunteers.total++;

		console.log(volunteers);

		$('.people').hide();
		$('.more-ppl').show();
	});

	$('.more-ppl').on('click', '.more', function(e) {
		e.preventDefault();
		$('.people').show();
		$('.more-ppl').hide();
		clear();
	});

	$('.more-ppl').on('click', '.done', function(e) {
		e.preventDefault();
		$('.more-ppl').hide();
		$('.entry-change').show();
		clear();
	});

	$('.more-ppl').on('click', '.finished', function(e) {
		e.preventDefault();
		$('.more-ppl').hide();

		build(victims);
		build(volunteers);

		$('.output').show();
		// $('.matching').show();
	});

	$('.entry-change').on('click', 'button', function(e) {
		e.preventDefault();
		$('.people').attr('id', 'volunteers');
		$('.done').removeClass('done').addClass('finished');
		$('.people').show();
		$('.entry-change').hide();
		$('.people').find('h2').fadeToggle(0);
	});

	$('#search-btn').on('click', function() {
		var person = $(this).closest('.output').find('.pin').val();
		var position = victims.names.indexOf(person);
		$('.matched').empty();


	if (position === -1) {
		$('.matched').append('<p>This person is not in the database</p>');
	}
	else {
		var match = [];

		for (i=0; i < volunteers.total; i++) {
			if (volunteers.street[i] === victims.street[position]) {
				match.push(volunteers.names[i]);
			}
		}

		$('.matched').append("<p>Available Volunteers:</p>");
		$('.matched').append(match.join(", ")).show();
		console.log(match);
	}

	});

})

