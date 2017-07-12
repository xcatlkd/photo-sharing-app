require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const connectSessionSequelize = require("connect-session-sequelize");
const User = require("./models/user.js");

const sql = require("./util/sql.js");
const snapagramRouter = require("./routes/snapagram.js");
const renderTemplate = require("./util/renderTemplate.js");


const app = express();
const cookieSecret = process.env.COOKIE_SECRET || "dev";
const SessionStore = connectSessionSequelize(session.Store);

// ********************* //
// *** Configuration *** //
// ********************* //
app.set("view engine", "ejs");
app.use(express.static("assets"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(cookieSecret));
app.use(session({
	secret: cookieSecret,
	store: new SessionStore({ db: sql }),
}));

// Add middleware here //


// ************** //
// *** Routes *** //
// ************** //

app.get("/", function(req, res) {
	res.render("home");
});

app.get("/signup", function(req,res) {
	res.render("signup");
});

app.post("/signup", function(req,res) {
	User.signup(req).then(function(user) {
		if (user) {
			res.redirect("success");
		}
		else {
			res.redirect("404");
		}
	}).catch(function(error) {
		if (!req.body.username) {
			res.redirect("signup");
		}
		else if (!req.body.password) {
			res.redirect("signup");
		}
		else {
			console.log("You had a error: ", error);
		}
	});
});

app.get("/login", function(req,res) {
	res.render("login");
});

app.post("/login", function(req,res) {
	User.login(req,res).then(function(user) {
		if (user) {
			res.redirect("success");
		}
		else {
			res.redirect("404");
		}
	});
});

app.get("/success", function(req,res) {
	res.render("success");
});

app.all("*", function(req, res) {
	res.render("404");
});

// *************** //
// *** Startup *** //
// *************** //
sql.sync().then(function() {
	console.log("Database is looking good");
	const port = process.env.PORT || 9000;

	app.listen(port, function() {
		console.log("Listening at http://localhost:" + port);
	});
});
