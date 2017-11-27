const discord = require('discord.js');
const Client = new Discord.Client();
const settings = require('./settings.json');
Client.commands = new Discord.Collection();
Client.aliases = new Discord.Collection();


//const fs = require('fs');


fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    const props = require(`./commands/${f}`);
    log(`Loading Command: ${props.help.name}. 👌`);
    Client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      Client.aliases.set(alias, props.help.name);
    });
  });
});

Client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      const cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};







client.login(settings.token);