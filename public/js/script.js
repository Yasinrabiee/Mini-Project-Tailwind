const html = $(`html`);

$(`#mode`).click(function() {
	html.toggleClass(`dark`);
	if (html.hasClass(`dark`)) {
		$(`#sun`).removeClass(`hidden`);
		$(`#moon`).addClass(`hidden`);
	} else {
		$(`#sun`).addClass(`hidden`);
		$(`#moon`).removeClass(`hidden`);
	}
});