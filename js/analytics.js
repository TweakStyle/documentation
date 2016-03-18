// piwik
var _paq = _paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="//stats.tweakstyle.com/";
  _paq.push(['setTrackerUrl', u+'a.php']);
  _paq.push(['setSiteId', 1]);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'a.js'; s.parentNode.insertBefore(g,s);
})();

window.onerror = function(errorMsg, url, line) {
	// send to piwik
	_paq.push(["trackEvent", url + ":" + line, errorMsg]);
};