var validation = (function () {

	var init = function () {
		_setUpListeners();
	};

	var _setUpListeners = function () {

	};

	//создаёт кутип
	var _createQtip = function (el, pos, text) {

		if (pos === 'right') {
			pos = {
				my: 'left center',
				at: 'right center'
			}
		} else {
			pos = {
				my: 'right center',
				at: 'left center'
			}
		}

		el.qtip({
			content: {
				text: text
			},
			show: {
				event: 'show'
			},
			hide: {
				event: 'keydown hideTooltip'
			},
			position: pos,
			style: {
				classes: 'qtip qtip-rounded'
			}
			}).trigger('show');

	};


	//Убирает qtip и класс ошибки у инпута 
	var _hideQtip = function (el) {
		el.removeClass('has-error');
		el.qtip({
			hide: {
				event: 'keydown hideTooltip'
			}
		}).trigger('hideTooltip');
	};

	//Убирает ошшибку и кутип с элемента, если тот в фокусе
	var _watchElements = function (form) {
		var elements = form.find('input, textarea').
							not('input[type="file"], input[type="hidden"], input[type="submit"]');

		
		$.each(elements, function (index, val) {
			var element = $(val);
			element.on('focus', function () {
				_hideQtip(element);
				element.removeClass('has-error');
			})
		})

	};

	//основная функция. Вызывает вотчер. Проходится по всем элементам и вызывает кутипы для пустых.
	var validateForm = function (form) {
		_watchElements(form);
		var elements = form.find('input, textarea').
							not('input[type="file"], input[type="hidden"], input[type="submit"]'),
			valid = true;

		$.each(elements, function (index, val) {
			var element = $(val),
				val = element.val(),
				pos = element.attr('qtip-position'),
				text = element.attr('qtip-content');

			_hideQtip(element);

			if (val === '') {
				element.addClass('has-error');
				_createQtip(element, pos, text);
				valid = false;
			}
		});

		return valid;

	};

	var clearForm = function (form) {

		var elements = form.find('input, textarea').
							not('input[type="file"], input[type="hidden"], input[type="submit"]');

		$.each(elements, function (index, val) {
			var element = $(val);
			element.val('');
			_hideQtip(element);
		});

	};

	return {
		init: init,
		validateForm: validateForm,
		clearForm: clearForm
	};

})();

validation.init();