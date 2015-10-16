var qtipModule = (function () {

	var init = function () {
		_setUpListeners();
	};

	var _setUpListeners = function () {
		$('.reset').on('click', _hideQtip);
	};

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
		classes: 'qtip'
		}).trigger('show');

	};

	var _showQtip = function (id) {
		var el = $('#' + id),
			pos = el.attr('qtip-position'),
			text = el.attr('qtip-content');

		createQtip(el, pos, text);
	};

	var _hideQtip = function () {
		document.find('.input')
					.trigger('hideTooltip');
	}

	return {
		init: init
	};
})();

qtipModule.init();

var createQtip = function (el, pos, text) {

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
		classes: 'qtip'
	}).trigger('show');

};

var showQtip = function (id) {
	var el = $('#' + id),
		pos = el.attr('qtip-position'),
		text = el.attr('qtip-content');

	createQtip(el, pos, text);
};

var hideQtip = function () {
	this.find('.input')
			.trigger('hideTooltip');
}