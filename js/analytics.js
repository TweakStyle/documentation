// piwik
var _paq = _paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="//piwik.tweakstyle.com/";
  _paq.push(['setTrackerUrl', u+'piwik.php']);
  _paq.push(['setSiteId', 1]);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();

// universal analytics
(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,"script","//www.google-analytics.com/analytics.js","ga");
ga("create", "UA-38713650-1", "auto");
ga("send", "pageview");

window.onerror = function(errorMsg, url, line) {
	if (url==="https://www.google-analytics.com/analytics.js") {
		// don't report errors in ga script
		return;
	}
	// send to piwik
	_paq.push(["trackEvent", "error", "window.onerror", url + ":" + line + " - "+errorMsg]);
	// send to ga error reporting
	ga("send", {
		"hitType" : "event",
		"eventCategory" : "error",
		"eventAction" : errorMsg,
		"eventLabel" : url + ":" + line,
		"nonInteraction": 1
	});
};