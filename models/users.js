const Sequelize = require("sequelize");
const sql = require("../util/sql.js");
const Photos = require("./photos.js");
const Comments = require("./comments.js");
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

function checkUsername(req) {
	Users.findAll({
		where: {
			username: req.body.username,
		},
	}).then(function() {
		if (req.body) {
			console.log("Already taken pansie.");
		}
	});
}


const Users = sql.define("user", {
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

Users.signup = function(req) {
	return Users.create({
		username: req.body.username,
		password: req.body.password,
	})
	.then(function(user) {
		req.session.userid = user.id;
		return user;
	});
};

Users.login = function(req) {
	checkUsername(req);
},

// Users.hasMany(Photos);
// Users.hasMany(Comments);

module.exports = Users;
