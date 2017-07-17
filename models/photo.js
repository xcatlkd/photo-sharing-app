const Sequelize = require("sequelize");
const sql = require("../util/sql.js");
const User = require("./user.js");
const Like = require("./like.js");
const Jimp = require("jimp"); //

const Photo = sql.define("photo", {
	id: {
		type: Sequelize.STRING,
		primaryKey: true,
	},
	size: {
		type: Sequelize.INTEGER,
		notNull: true,
	},
	originalName: {
		type: Sequelize.STRING,
		notNull: true,
	},
	mimeType: {
		type: Sequelize.STRING,
		notNull: true,
	},
});

Photo.make = function(req) {
	return Photo.create({
		id: req.file.filename,
		size: req.file.size,
		originalName: req.file.originalname,
		mimeType: req.file.mimetype,
	}).then(function() {
		if (req.file.mimetype.includes("image/")) {
			Jimp.read(req.file.path).then(function(img) {
				img.quality(80);
				img.resize(Jimp.AUTO, 400);
			});
		}
	});
};



Photos.hasMany(Like);
Photos.hasMany(Comment);

module.exports = Photo;
