const Sequelize = require("sequelize");
const sql = require("../utility/sql");

const Users = sql.define("user", {
	username: {
		type: Sequelize.STRING,
		primaryKey: true,
	},
	password: {
		type: Sequelize.STRING,
	},
});

module.exports = Users;
