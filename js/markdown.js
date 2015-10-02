/************ smooth scroll ************/
$('a[href*=#]:not([href=#])').click(function() {
	goToElement(this.hash);
});

if (window.location.hash) {
	goToElement(window.location.hash);
}
$(window).on('hashchange', function() {
	goToElement(window.location.hash);
});

function goToElement(hash) {
	if (hash && hash !== "#") {
		var elementName = hash.replace(/^#/, '');
		var $element = $("#"+elementName);
		if ($element.length === 0) {
			$element = $("[name="+elementName+"]");
		}
		if ($element.length > 0 && !$element.hasClass("highlight")) {
			$element.addClass("highlight");
			$('html, body').stop().animate({
				scrollTop: $element.offset().top - Math.max(100, 0.2 * $(window).height())
			}, 250);
			setTimeout(function() {
				$element.removeClass("highlight");
			}, 500);
		}
	} else {
		$('html, body').stop().animate({
			scrollTop: 0
		}, 250);
	}
}

/************ highlightjs ************/
$(document).ready(function() {
	$('code').each(function(i, block) {
		if (!this.className) {
			$(this).addClass("hljs");
		} else {
			hljs.highlightBlock(block);
		}
	});
});
