(function ($) {

	/*-------------------------------
		iPhone/iPad class
	-------------------------------*/
	var ua = navigator.userAgent.toLowerCase();

	if (ua.includes('iphone')) {
		document.body.classList.add("iPhone");
	} else if (ua.includes('ipad') || (ua.includes('macintosh') && 'ontouchend' in document)) {
		document.body.classList.add("iPad");
	}

	/*-------------------------------
		ロード判定
	-------------------------------*/
	setTimeout(function () {
		$('body').addClass('js-ready');
	}, 200);

	$(window).on('load', function () {
		$('body').addClass('js-loaded');
	});

	//loading
	var webStorage = function () {
		if (sessionStorage.getItem('access')) {
		} else {
			sessionStorage.setItem('access', 0);
			let body = document.body;
			body.classList.add('once');
		}
	}
	webStorage();

	/*-------------------------------
		スクロール判定
	-------------------------------*/
	$(window).on('load scroll', function () {
		var s_top = $(window).scrollTop();
		if (s_top > 0) {
			$('body').addClass('js-scrolled');
		} else {
			$('body').removeClass('js-scrolled');
		}
	});

	/*-------------------------------
		aのクリックイベント
	-------------------------------*/
	$('body').on('click', 'a', function (e) {

		var str = this.getAttribute('href').substring(0, 1),
			$linktype = $(this).attr('target'),
			$call = this.getAttribute('href').substring(0, 3);

		if (str === "#") {
			//スムーズスクロールをさせる
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $("[name=' + this.hash.slice(1) + ']");
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 700);
					return false;
				}
			}
		} else if ($linktype == "_blank" || $call == "tel") {
			//何もしない
		}

	});


})(jQuery);

/*-------------------------------
	ハンバーガーメニュー
-------------------------------*/
const hamburger_btn = document.querySelectorAll('.-hamburger');
const hamburger_menu = document.querySelector('.hamburger');
const nav_links = document.querySelectorAll('.hamburger__menu__nav__list__item a');

// ハンバーガーメニューの開閉処理
hamburger_btn.forEach(btn => {
  btn.addEventListener('click', function() {
    hamburger_menu.classList.toggle('js-open');
    btn.classList.toggle('js-open');
  });
});

// ナビゲーションリンクをクリックしたらメニューを閉じる
nav_links.forEach(link => {
  link.addEventListener('click', function() {
    hamburger_menu.classList.remove('js-open');
    hamburger_btn.forEach(btn => btn.classList.remove('js-open'));
  });
});



/*-------------------------------
	スクロールアクション
-------------------------------*/
function scrollAnime() {
	const animation = document.querySelectorAll(".anime");
	const animationArray = Array.prototype.slice.call(animation, 0);

	const options = {
		root: null,
		rootMargin: "-200px 0px -200px",
		threshold: 0
	};
	const observer = new IntersectionObserver(doWhenIntersect, options);
	animationArray.forEach(function (animation) {
		observer.observe(animation);
	});

	function doWhenIntersect(entries) {
		const entriesArray = Array.prototype.slice.call(entries, 0);

		entriesArray.forEach(function (entry) {
			if (entry.isIntersecting) {
				entry.target.classList.add("js-active");
			}
		});
	}
}
scrollAnime();

//ロード時、ウィンドウ内に入っている要素は強制的に表示
function loadActive() {
	$(".anime").each(function () {
		var targetAnime = $(this).offset().top;
		var windowHeight = $(window).height();
		if (targetAnime < windowHeight) {
			$(this).addClass("js-active");
		}
	});
}
loadActive();
