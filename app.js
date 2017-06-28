require("dotenv").config;
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const session =("express-session");
const connectSessionSequelize = require("connect-session-sequelize");

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
//Add middleware here //

// ************** //
// *** Routes *** //
// ************** //
app.use("/", snapagramRouter);
app.get("*", function(req, res) {
	renderTemplate(res,"404");
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
