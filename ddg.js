document.onkeyup = function(e) {
	// when you tyoe E in point cursour to search bar
	if (e.which == 69) {
		document.querySelector("input[name='q']").focus();
	}
}