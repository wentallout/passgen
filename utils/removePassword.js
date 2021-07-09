const fs = require("fs");
const path = require("path");
const os = require("os");
const chalk = require("chalk");

//remove created passwords.txt
const removePassword = () => {
	fs.unlink(path.join(__dirname, "../", "passwords.txt"), (err) => {
		if (err) {
			console.log(chalk.red(err));
		} else {
			console.log(chalk.green("Password file has been removed"));
		}
	});
};

module.exports = removePassword;
