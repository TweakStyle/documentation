/******** Onload with timeout ********/

var loadedTimer = setTimeout(loaded, 2000);
$(window).load(loaded);

function loaded() {
	if (loadedTimer) {
		clearTimeout(loadedTimer);
		loadedTimer = undefined;
		// fade in body when ready
		$("body").removeClass("loading");
	}
}

/************ smooth scroll ************/
$("a[href^='#']:not([href='#'])").click(function() {
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
			}, 700);
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

var updateMenuTimer;
$(window).scroll(function() {
	clearTimeout(updateMenuTimer);
	updateMenuTimer = setTimeout(updateMenu, 100);
});
updateMenu();

function updateMenu() {
	var scrollTop = $(window).scrollTop();
	var scrollBottom = scrollTop + $(window).height();
	$(".markdownIt-TOC .visible").removeClass("visible");
	$("h2,h3").each(function(index, element) {
		var $element = $(element);
		if($element.offset().top - 100 > scrollTop && $element.offset().top + 50 < scrollBottom && $element.attr("id")) {
			$(".markdownIt-TOC a[href='#"+$element.attr("id")+"']").parents("ul").addClass("visible");
		}
	});
}