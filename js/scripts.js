$('section.intro .background').css('height', (734 * $(window).outerWidth()) / 1280);

$(document).ready(function () {

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

					_right.find('p:nth-child(1), p:nth-child(2)').remove();       /*   */

					_right.find('p').each(function () {
						if ($(this).html() == '<strong>Requirements</strong>')
							$(this).replaceWith('<div class="label">Requirements</div>');

						if ($(this).html() == '<strong>Benefits</strong>')
							$(this).replaceWith('<div class="label">Benefits</div>');
					});

					_right.find('.whr-description').prepend('<div class="label">Role</div>');

					/* _right.find('p').each(function () {
						var LIarray = $(this).html().split('<br>'),
							UL = '<ul>';

						$.each(LIarray, function () { UL += (this != '') ? ('<li>' + this + '</li>') : ''; });
						UL += '</ul>';

						$(this).replaceWith(UL);  
					});  */

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

	$('header .title a').hover(function () {
		var _e1 = $('header .title a .e1'),
			_e2 = $('header .title a .e2');

		_e1.toggleClass('animate');
		_e2.toggleClass('animate');
	});

	$('.guide-checklist__item-btn a').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();

		var _t = $(this);

		_t.parent().find('a').not(this).removeClass('active non-active').addClass('non-active');
		_t.removeClass('active non-active').addClass('active');

		var _p = $('.guide-checklist'),
			_r = $('.guide-checklist__result'),
			_yes_a = _p.find('.guide-checklist__item-btn .yes.active').length,
			_yes_t = _p.find('.guide-checklist__item-btn .yes').length,
			_no_a = _p.find('.guide-checklist__item-btn .no.active').length;

		var s0 = 'To get your score, please answer the questions above',
			s1 = 'You have a lot of work ahead of you, but you’re taking the first step to innovation right now!',
			s2 = 'You’re doing a lot well, but there are still some things you need to do before you’re innovating.',
			s3 = 'You’re ahead of the curve! You may want to consider writing and speaking about your work.';

		var _s = ((_yes_a == 0) && (_no_a == 0)) ? s0 : ((_yes_a <= 6) ? s1 : ((_yes_a <= 12) ? s2 : s3));

		_r.html('<div class="counter"><span>' + (((_yes_a == 0) && (_no_a == 0)) ? "—" : (_yes_a + "/" + _yes_t)) + '</span></div><a href="#" class="reset"><span><i class="icon-12"></i>Click to reset</span></a>' + _s);

		if ((_yes_a == 0) && (_no_a == 0)) {
			_r.removeClass('active');
		} else {
			_r.addClass('active');
		}

		return false;
	});

	$('body').on('click', '.guide-checklist__result .reset', function (e) {
		e.preventDefault();
		e.stopPropagation();

		var _p = $('.guide-checklist'),
			_r = $('.guide-checklist__result'),
			_total = _p.find('.guide-checklist__item-btn a');

		_total.removeClass('active non-active');
		_r.html('<div class="counter"><span>—</span></div><a href="#" class="reset"><span><i class="icon-12"></i>Click to reset</span></a>To get your score, please answer the questions above');
		_r.removeClass('active');

		return false;
	});

	$('.guide-b0__nav a').on('click', function (e) {
		e.preventDefault ();
		e.stopPropagation ();

		var _id = $(this).attr('href');

		if ($(window).width() <= 560) {
			$('body, html').animate({ scrollTop: $(_id).offset().top - $('header').height() }, 300);
		} else {
			$('body, html').animate({ scrollTop: $(_id).offset().top - $('header').height() - $('.guide-b0__nav').height() }, 300);
		}

		return false;
	});

	if ($('.guide-intro').length > 0) {
		var animatedLine = false, section = 'b0';

		function animateLine (sec) {
			animatedLine = true;
			section = sec;

			$('.guide-b0__nav ul .line').stop().animate({
				left: $('.guide-b0__nav li.active').offset().left - $('.guide-b0__nav ul').offset().left,
				width: $('.guide-b0__nav li.active').width()
			}, 300, function () {
				animatedLine = false;
			});
		}

		$(window).on('scroll load resize', function () {
			var _t = $(this),
				_h = $('header'),
				_i = $('.guide-intro'),
				_ot = $('.guide-b0');

			if (_t.scrollTop() >= _i.offset().top + _i.outerHeight() - _h.height()) {
				_ot.addClass('fixed');
			} else {
				_ot.removeClass('fixed');
			}

			var scrolledSections = [];

			$('.guide-scroll-item').each(function () {
				if ($(this).offset().top - _h.height() - $('.guide-b0__nav').height() <= _t.scrollTop())
					scrolledSections.push($(this));
			});

			if (scrolledSections.length > 0) {
				var _b = scrolledSections.pop().data('b');

				$('.guide-b0__nav li').removeClass('active');
				$('.guide-b0__nav li[data-b=' + _b + ']').addClass('active');

				if (section == _b) {
					if (!animatedLine) animateLine (_b);
				} else {
					animateLine (_b);
				}
			}
		});
	}

	$('.guide-b3__list a').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();

		var _id = $(this).data('id');

		$(this).addClass('active').closest('ul').find('.active').not(this).removeClass('active');
		$('.guide-b3__box').removeClass('active');
		$('.guide-b3__box[data-id=' + _id + ']').addClass('active');

		return false;
	});

	$('.scrollbar-inner').each(function () {
		$(this).scrollbar();
	});

	$('.fpopupOpen').fancybox({
		padding: 0,
		closeBtn: false
	});

	$('.f_close').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();

		$.fancybox.close();

		return false;
	});

	$('.guide-b4__item').on('click', function () {
		$(this).toggleClass('active');
	});

	/// new team grid

	if (teamMembers.length > 0) {

		function lockScroll () {
			var _scrollTop = $('body').scrollTop();

			$('body').addClass('modal-open');
			$('body').css('top', -1 * _scrollTop);
		}

		function unlockScroll () {
			var _scrollTop = parseInt($('body').css('top'));

			$('body').removeClass('modal-open');
			$('body').css('top', 'auto');
			$('body').scrollTop(-1 * _scrollTop);
		}

		function getFirstWord (str) {
			return (str.indexOf(' ') === -1) ? str : str.substr(0, str.indexOf(' '));
		}

		function loadMenBio (id) {
			id = parseInt(id);

			var _p = $('.tpopup'),
				_pPhoto = _p.find('.tpopup--photo img'),
				_pBio = _p.find('.tpopup--bio'),
				_pPrev = _p.find('.tpopup--prev span'),
				_pNext = _p.find('.tpopup--next span'),
				_men = teamMembers[id],
				_prevMenID = (teamMembers[id - 1]) ? (id - 1) : (teamMembers.length - 1),
				_nextMenID = (teamMembers[id + 1]) ? (id + 1) : 0,
				_prevMen = teamMembers[_prevMenID],
				_nextMen = teamMembers[_nextMenID];

			_p.attr('data-id', id);
			_p.attr('data-prev-id', _prevMenID);
			_p.attr('data-next-id', _nextMenID);
			_pPhoto.attr('src', _men.photo);
			_pBio.html(_men.bio);
			_pPrev.html(getFirstWord(_prevMen.name));
			_pNext.html(getFirstWord(_nextMen.name));
		}

		$('.team-box').html('');

		$.each(teamMembers, function (key, value) {
			var _men = $('<div class="men"></div>').appendTo($('.team-box'));

			_men.attr('data-id', key);
			_men.attr('data-href', 'xs-tm?id=' + (key + 1));

			_men.append('<div class="photo"><img src="' + value.photo + '" alt="" /><a href="' + value.linkedin + '" class="social" target="_blank"><i></i></a></div>');
			_men.append('<div class="name">' + value.name + '</div>');
			_men.append('<div class="post">' + value.post + '</div>');
		});

		$('.team-box .men').on('click', function () {
			if ($(window).width() > 560) {
				lockScroll ();

				loadMenBio ($(this).data('id'));

				$('.tpopup').fadeIn(300);
			} else {
				window.location.href = $(this).data('href');
			}
		});

		$('.tpopup--overlay, .tpopup--close').on('click', function (e) {
			e.preventDefault();

			unlockScroll ();

			$('.tpopup').fadeOut(300);
		});

		$('.tpopup--prev').on('click', function (e) {
			e.preventDefault();

			loadMenBio ($(this).closest('.tpopup').attr('data-prev-id'));
		});

		$('.tpopup--next').on('click', function (e) {
			e.preventDefault();

			loadMenBio ($(this).closest('.tpopup').attr('data-next-id'));
		});
	}

});