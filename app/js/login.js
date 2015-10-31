var loginModule = (function () {

	var init = function () {
		_setUpListeners();
	};

	var _setUpListeners = function () {
		$('.login-form').on('submit', _submitForm);
	};

	var _submitForm = function (e) {
		e.preventDefault();

		var form = $(this),
			url = '../php/login.php',
			defObj = _ajaxForm(form, url);
	};

	var _ajaxForm = function (form, url) {
		if (!validation.validateForm(form)) return false;
	};

	return {
		init: init
	};

})();

loginModule.init();