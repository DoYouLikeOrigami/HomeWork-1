var myModule = (function () {
	var init = function () {
		_setUpListeners();
	};

	var _setUpListeners = function () {
		$('#show-popup').on('click', _showPopup);
		$('#add-new-project').on('submit', _addProject);
	};

	var _showPopup = function (e) {
		e.preventDefault();
		var bPopup = $('#project-popup')
		bPopup.bPopup({
			speed: 650,
			transition: 'slideDown',
			modalColor: '#7E8C99',
			opacity: 0.75,
		});
		/*$('#close-popup').on('click', function (ec) {
			e.preventDefault();
			bPopup.close();
		});*/
	};

	var _addProject = function (e) {
		e.preventDefault();

		var form = $(this),
			url = '../php/add-project.php',
			data = form.serialize();

		console.log(data || 'no data');

		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data,
		})
		.done(function(ans) {
			console.log("success");
			console.log(ans);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	};

	return {
		init: init
	};
})();

myModule.init();


