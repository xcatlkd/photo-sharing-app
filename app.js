require("dotenv").config;
const express = require('express');
const snapagramRouter = require("./routes/snapagram.js");
const renderTemplate = require("./util/renderTemplate.js");
const sql = require("./util/sql.js");
const bodyParser = require('body-parser');
const app = express();

app.set("view engine", "ejs");
app.use(express.static("assets"));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/", snapagramRouter);
app.get("*", function(req, res) {
	renderTemplate(res,"404");
});

sql.sync().then(function() {
	console.log("Database is looking good");
	const port = process.env.PORT || 9000;

	app.listen(port, function() {
		console.log("Listening at http://localhost:" + port);
	});
});
