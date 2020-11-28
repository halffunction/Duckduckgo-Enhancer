// ==UserScript==
// @name        ddg enhancer
// @namespace   Violentmonkey Scripts
// @match       https://duckduckgo.com/
// @grant       none
// @version     1.0
// @author      -
// @description 11/13/2020, 10:04:35 PM
// ==/UserScript==

document.onkeyup = function(e) {
	// when you tyoe E in point cursour to search bar
	if (e.which == 69) {
		document.querySelector("input[name='q']").focus();
	}
}