function renderTemplate(res, title, page, args) {
	return res.render("template", {
		page: page,
		title: title || "Hey Mom",
		args: args,
	});
}

module.exports = renderTemplate;
