(function(window, document, undefined) {
	/**
	* OutsideJs
	* https://github.com/jdholdren/OutsideJs
	* @author James Holdren
	**/

	var body = document.getElementsByTagName('body')[0],
	hostname = window.location.hostname,
	onload = (window.attachEvent) ? 'onload' : 'load';

	/**
	* Adds event listener
	* Support for legacy IE
	* @param string type
	* @param function listener
	* @param bool capture
	**/
	function listen(type, func, capture) {
		// Modern
		if (window.addEventListener) {
			window.addEventListener(type, func, capture);
		}
		// Legacy
		else {
			window.attachEvent(type, func);
		}
	};

	/**
	* Determines if outside or inside link
	* @param event
	* @retur void
	**/
	function response(e) {
		// Determine if it's a link
		if (e.target.tagName === 'A' && e.target.hostname !== hostname) {
			e.preventDefault();
			window.open(e.target.href);
		}
	}

	// Attach load listener
	listen(onload, function() {
		listen('click', response, true);
	}, false);


}(window, document));