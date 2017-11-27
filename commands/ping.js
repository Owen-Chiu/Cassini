exports.run = (client, message) => {
    if(message.content.startsWith(prefix + "ping")) {
        message.channel.send('pong beep boop');
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ping',
    description: 'Ping',
    usage: 'ping'
  }
  };