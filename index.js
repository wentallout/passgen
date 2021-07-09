#!/usr/bin/env node
const commander = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const log = console.log;
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");
const removePassword = require("./utils/removePassword");

commander.version("1.0.0").description("Simple Password Generator");

commander
	.option("-l, --length <number>", "length of password", "8")
	.option("-s, --save", "save password to passwords.txt")
	.option("-nn, --no-numbers", "remove numbers")
	.option("-ns, --no-symbols", "remove symbols")
	.option("-r, --remove", "remove passwords.txt")
	.parse();

const { length, save, numbers, symbols, remove } = commander.opts();

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

// Save to file
if (save) {
	savePassword(generatedPassword);
}

if (remove) {
	removePassword();
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword);

// Output generated password
log(chalk.blue("Generated Password: ") + chalk.bold(generatedPassword));
log(chalk.yellow("Password copied to clipboard"));
