const Sequelize = require("sequelize");
const sql = require("../utility/sql");

const Users = sql.define("user", {
	username: {
		type: Sequelize.STRING,
	},
	password: {
		type: Sequelize.STRING,
	}
});
