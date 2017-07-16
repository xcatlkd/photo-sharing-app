function requiredLoggedOut (req, res, next) {
        if (req.user && req.path !== "/logout") {
                res.redirect("/photos");
        }
        else {
                  next();
        }
}

module.exports = requiredLoggedOut;
