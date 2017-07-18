const Sequelize = require("sequelize");
const sql = require("../util/sql.js");
const Photo = require("./photo.js");
const Comment = require("./comment.js");
const Jimp = require("jimp"); // An image processing library for Node written entirely in JavaScript
const bcrypt = require("bcrypt"); // Password hashing
const fs = require("fs-extra"); // Adds extra file system methods

// Password Hashing

function hashPassword(user) {
	if (user.password) {
		return bcrypt.genSalt()
		.then(function(salt) {
			return bcrypt.hash(user.password, salt);
		})
		.then(function(hashedPw) {
			user.password = hashedPw;
		});
	}
}

function checkUsername(req, res, username) {
	return User.findOne({
		where: {
			username: req.body.username,
		},
	}).then(function(user) {
		if (user) {
			return true;
		}
		else {
			return false;
		}
	});
}

function checkIdentity(req,res) {
	return User.findOne({
		where: {
			username: req.body.username,
		},
	}).then(function(user) {
		if (user) {
			return bcrypt.compare(req.body.password, user.get("password"));
		}
		else {
			return false;
		}
	});
}


const User = sql.define("user", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	username: {
		type: Sequelize.STRING,
		notNull: true,
		unique: true,
	},
	password: {
		type: Sequelize.STRING(500),
		notNull: true,
	},
},
	{
	hooks: {
		beforeCreate: hashPassword,
		beforeUpdate: hashPassword,
	},
});

User.signup = function(req) {
	return User.create({
		username: req.body.username,
		password: req.body.password,
	})
	.then(function(user) {
		req.session.userid = user.id;
		return user;
	}).catch(function(error) {
		console.log("This>>>>", error);
	});
};

User.login = function(req,res) {
	return checkIdentity(req,res).then(function(isValid) {
		if (isValid) {
			res.render("test", {
				name: req.body.username,
			});
		}
		else {
			res.status(400).send("Nope. Try Again");
		}
	}).catch(function(err) {
		console.error(err);
		res.status(500).send("Start Over");
	});
};

User.hasMany(Photo);
User.hasMany(Comment);

module.exports = User;
