const Sequelize = require("sequelize");
const sql = require("../util/sql.js");
const User = require("./user.js");
const Like = require("./like.js");
const Jimp = require("jimp"); //
const Comment = require("./comment.js");
const CommentLike = require("./commentLike.js");

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

	description: {
		type: Sequelize.STRING(200),
	},
	filename: {
		type: Sequelize.STRING,
		notNull: true,
	}
	},

});

File.prototype.getThumbnailSrc = function() {
	// Check if I have a thumbnail available in assets/thumbnails!
	// Otherwise return this default icon
	const filePath = "/thumbnails/" + this.get("id") + ".jpg";
	if (fs.existsSync("assets" + filePath)) {
		return filePath;
	}
	else {
		return "/icons/file.svg";
	}
};

File.prototype.getPreviewSrc = function() {
	// Check if I have a preview available in assets/previews!
	// Otherwise return null, to display a "no preview" message
	const filePath = "/previews/" + this.get("id") + ".jpg";
	if (fs.existsSync("assets" + filePath)) {
		return filePath;
	}

	return null;
};

Photos.hasMany(Like);
Photos.hasMany(Comment);

module.exports = Photo;
