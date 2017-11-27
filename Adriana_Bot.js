const discord = require('discord.js');
const Client = new Discord.Client();
const settings = require('./settings.json');

const { promisify } = require('util');
const readdir = promisify(require("fs").readdir);

require("./node_modules/functions.js")(bot);

Client.commands = new discord.Collection();
Client.aliases = new discord.Collection();

(async function() {

    const commandFiles = await readdir('./commands/');
    Client.login("log", `Loading ${commandFiles.length} commands!`);
    commandFiles.forEach(f => {
        try {
            let commandFile = require(`./commands/${f}`);
            Client.log("log", `Loading the ${commandFile.help.name} command!`);
            Client.commands.set(commandFile.help.name, commandFile);
            commandFile.conf.aliases.forEach(alias => {
              Client.aliases.set(alias, commandFile.help.name);
            });    
        } catch (e) {
          Client.log(`Unable to load command ${f}: ${e}`);
        }
    });

    Client.login(settings.token);

}());