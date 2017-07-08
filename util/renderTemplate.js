function renderTemplate(req, res, page, title, args, error) {
	return res.render("template", {
		page: page,
		title: title,
		args: args,
		error: error,
		// isLoggedIn: !!req.user,
	});
}

module.exports = renderTemplate;
