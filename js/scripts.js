$('section.intro .background').css('height', (734 * $(window).outerWidth()) / 1280);

//$('section.intro .background').addClass('animated');

$(document).ready(function () {

	/*$('.parallax').each(function () {
		var _t = $(this);

		$(window).on('scroll load resize', function() {
			yPos = ($(window).width() > 1000) ? (-1 * $(window).scrollTop() * _t.data('speed')) : 0;

			yPos = (yPos > 0) ? 0 : yPos;

			_t.css('bottom', yPos);
		});	
	});*/

	$('header .openMenu').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();

		var _m = $('header .menu');

		_m.slideToggle();

		return false;
	});

	$(window).on('load resize', function () {
		var _w = $('section.intro .wrapper'),
			_c = $('section.intro .container');

		if ($(window).width() <= 560) {
			_w.css('height', $(window).width() * 1.2);
			_c.css('padding-top', (((_w.height() * 1.4) / 3) - _c.height()) / 2);
		} else {
			_w.attr('style', '');
			_c.attr('style', '');
		}

		$('section.intro .background').css('height', (734 * $(window).outerWidth()) / 1280);

		$('footer').css('margin-top', 0);

		if ($('body').outerHeight() < $(window).height()) {
			$('footer').css('margin-top', $(window).height() - $('body').outerHeight());
		}
	});

	$('section.pricing .why-public .why-head span').on('click', function () {
		$('section.pricing .why-public').toggleClass('shown');
		$('section.pricing .why-public .why-cont').slideToggle(200);
	});

	$('header .contacts .call i').on('click', function () {
		$(this).closest('.call').toggleClass('shown');
	});

	if ($('section.careers').length > 0) {
		function onCareersLoaded_func () {
			if ($('.whr-item').length > 0) {
				clearInterval (onCareersLoaded);

				var _items = $('<div />', { class: "items" });

				$('.whr-items .whr-item').each(function () {
					var _item  = $('<div />', { class: "item hidden" }),
						_cont  = $('<div />', { class: "container" }),
						_clear = $('<div />', { class: "clearfix" }),
						_left  = $('<div />', { class: "left" }),
						_right = $('<div />', { class: "right" });

					_left.html($(this).find('.whr-title')[0].outerHTML);
					_right.html($(this).find('.whr-description')[0].outerHTML);

					_right.find('p:nth-child(1), p:nth-child(2)').remove();

					_right.find('p').each(function () {
						if ($(this).html() == '<strong>Requirements</strong>')
							$(this).replaceWith('<div class="label">Requirements</div>');

						if ($(this).html() == '<strong>Benefits</strong>')
							$(this).replaceWith('<div class="label">Benefits</div>');
					});

					_right.find('.whr-description').prepend('<div class="label">Role</div>');

					_right.find('p').each(function () {
						var LIarray = $(this).html().split('<br>'),
							UL = '<ul>';

						$.each(LIarray, function () { UL += (this != '') ? ('<li>' + this + '</li>') : ''; });
						UL += '</ul>';

						$(this).replaceWith(UL);
					});

					_right.append('<a href="#" class="showFull">Full description</a>');
					_right.append('<a href="' + _left.find('a').attr('href') + '" target="_blank" class="applyJob btn middle red">Apply for this job</a>');
					_right.append('<a href="#" class="closeFull">Close full view</a>');

					_left.find('.whr-title').html(_left.find('a').html());

					_right.find('.showFull').on('click', function () {
						$(this).closest('.item').removeClass('hidden').addClass('shown');

						return false;
					});

					_right.find('.closeFull').on('click', function () {
						$(this).closest('.item').removeClass('shown').addClass('hidden');

						return false;
					});

					_clear.append(_left);
					_clear.append(_right);
					_cont.append(_clear);

					_item.append(_cont);

					_items.append(_item);
				});

				$('section.careers .loading-list, section.careers #whr_embed_hook').remove();
				$('section.careers').append(_items);
			} 
		}

		var onCareersLoaded = setInterval(onCareersLoaded_func, 1);
	}

});