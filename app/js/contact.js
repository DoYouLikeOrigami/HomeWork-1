﻿var contact = (function () {

	var init = function () {
		_setUpListeners();
	};

	var _setUpListeners = function () {
		$('.contact-form').on('submit', _submitForm)
						.on('reset', _resetForm);
	};

	var _submitForm = function (e) {
		e.preventDefault();

		var form = $(this),
			url = '../php/contact.php',
			defObj = _ajaxForm(form, url);
	};

	var _resetForm = function (e) {
		e.preventDefault();

		var form = $(this);
		return validation.clearForm(form);
	}

	var _ajaxForm = function (form, url) {
		if (!validation.validateForm(form)) return false;
	};

	return {
		init: init
	};

})();

contact.init();