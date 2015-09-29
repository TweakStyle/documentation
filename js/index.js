/************ smooth scroll ************/
$('a[href*=#]:not([href=#])').click(function() {
	goToElement(this.hash.slice(1));
});

function goToElement(elementName) {
	var $element = $("#"+elementName);
	if ($element.length === 0) {
		$element = $("[name="+elementName+"]");
	}
	if ($element.length > 0) {
		$element.addClass("highlight");
		$('html, body').animate({
			scrollTop: $element.offset().top - Math.max(100, 0.2 * $(window).height())
		}, 250);
		setTimeout(function() {
			$element.removeClass("highlight");
		}, 500);
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
