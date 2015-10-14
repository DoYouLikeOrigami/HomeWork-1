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

		console.log(data);

		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data,
		})
		.done(function(ans) {
			console.log(ans);
			if (ans.status === 'Ok') {
				form.find('.success-mes').text(ans.text).show();
			} else {
				form.find('.error-mes').text(ans.text).show();
			}
		})
		.fail(function() {
			console.log("error");
		});
		
	};

	return {
		init: init
	};
})();

myModule.init();


