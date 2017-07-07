function renderTemplate(res, page, title, args, links) {
	return res.render("template", {
		page: page,
		title: title,
		args: args,
		error: error,
	});
}

module.exports = renderTemplate;
