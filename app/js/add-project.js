var projectModule = (function () {

	var init = function () {
		_setUpListeners();
	};

	var _setUpListeners = function () {
		$('#showPopup').on('click', _showPopup);
		$('#addProject').on('submit', _addProject);
	};

	var _showPopup = function (e) {
		e.preventDefault();
		var bPopup = $('#projectPopup'),
            form = bPopup.find('.form');
		bPopup.bPopup({
			speed: 650,
			transition: 'slideDown',
			modalColor: '#7E8C99',
			opacity: 0.75,
			onClose: function () {
              	form.find('.serverMes')
                		.text('')
                		.hide();
				form.find('.input')
						.trigger('hideTooltip')
						.removeClass('hasError');
			}
		});
	};

	var _addProject = function (e) {
		e.preventDefault();
		
		var form = $(this),
			url = '../php/add-project.php';
            //serverAnswer = _ajaxForm(form, url);
      	
      	validation.validateForm(form);
      	/*
      	form.find('.server-mes')
                		.text('')
                		.hide();

		serverAnswer.done(function(ans) {
			if (ans.status === 'Ok') {
				form.find('.success-mes').text(ans.text).show();
			} else {
				form.find('.error-mes').text(ans.text).show();
			}
		})
		.fail(function() {
			console.log("error");
		});*/
		
	};
  	/*
  	var _ajaxForm = function (form, url) {
    	
      //if (!valid) return false;
      
      var data = form.serialize();
      
      var result = $.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data,
      		}).fail( function (ans) {
        		console.log('Проблемы в PHP');
        		form.find('.error-mes').text('На сервере произошла ошибка').show();
      			});
                  
      return result;
      
    };*/

	return {
		init: init
	};

})();

projectModule.init();


