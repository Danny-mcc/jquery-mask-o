(function($) {

	$.fn.masko = function(settings, callback) {

		settings = $.extend({}, $.fn.masko.settings, settings || {});

		this.each(function() {

			var maskedDiv = $(this);
			var maskDiv = $(document.createElement('div')).addClass('mask-o');

			// Use custom class for styling if set.
			if (settings.customClass.length) {
				maskDiv.addClass(settings.customClass);
			} else {
				maskDiv
					.css('background', 	settings.color + ' url(' + settings.image + ') no-repeat center center')
					.css('opacity', 	settings.opacity)
					.css('zIndex',		settings.zIndex);
			}

			maskDiv
				.css('position',	'absolute')
				.css('top', 		maskedDiv.offset().top)
				.css('left', 		maskedDiv.offset().left)
				.css('height', 		maskedDiv.height())
				.css('width',		maskedDiv.width());

			$('body').append(maskDiv);

			maskedDiv.one('unmasko', function() {
				maskDiv.remove();
			});

			// Resize & reposition mask with window
			$(window).resize(function() {
				maskDiv
					.css('top', 	maskedDiv.offset().top)
					.css('left', 	maskedDiv.offset().left)
					.css('height', 	maskedDiv.height())
					.css('width',	maskedDiv.width());
			});

		});

		// Fire Callback
		if (typeof callback == 'function') {
			callback.call(this);
		}

		return this;

	}

	$.fn.unmasko = function(callback) {

		this.each(function() {
			$(this).triggerHandler('unmasko');
		});

		// Fire Callback
		if (typeof callback == 'function') {
			callback.call(this);
		}

		return this;

	}

	// Default Settings
	$.fn.masko.settings = {
		image		: 'loader.gif',
		opacity		: 0.5,
		color		: '#FFF',
		zIndex		: 50,
		customClass	: false
	};

}(jQuery));