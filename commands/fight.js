exports.run = async(Client, message, args) => {
    const Discord = require('discord.js');

  if (message.content.startsWith(prefix + 'fight') || message.content.startsWith(prefix + 'Fight')) {
    var responses = [
      " was hit on the head by ", 
      " was kicked by ", 
      " was slammed into a wall by ",
      " was dropkicked by ",
      " was DDoSed by ", 
      " was chokeslammed by ",
      " was run over with a robot by ",
      " had their IQ dropped 15 points by ",
      " had a heavy object dropped on them by ",
      " was beat up by "
    ];
    
    var player1 = message.author;
    var player2 = message.mentions.users.array()[0];
    var hp1 = 1000;
    var hp2 = 1000;
    var damage = [100, 150, 200, 300, 50, 250];
    var turn1 = (Math.random() > 0.5);
    var times = 0;
    
    if (player2 != null) {
      while (hp1 > 0 && hp2 > 0) {
        times++;
        var i = Math.floor(Math.random() * responses.length);
        var x = Math.floor(Math.random() * damage.length);
        if (turn1 == true) {
          hp2 = hp2 - damage[x];
          if (hp2 < 0)
            hp2 = 0;
          send("**" + player2.username + "**" + responses[i] + "**" + player1.username + "**! *[-" + damage[x] + " hp] [" + hp2 + " HP remaining]*", times);
          turn1 = false;
        } else {
          hp1 = hp1 - damage[x];
          if (hp1 < 0)
            hp1 = 0;
          send("**" + player1.username + "**" + responses[i] + "**" + player2.username + "**! *[-" + damage[x] + " hp] [" + hp1 + " HP remaining]*", times);
          turn1 = true;
        }
      }
      
      if (hp1 == 0)
        send(player1 + " lost! GG " + player2 + "!", times);
      else if (hp2 == 0)
        send(player2 + " lost! GG " + player1 + "!", times);
      console.log (player1 + " lost! GG " + player2 + "!", times)
      setTimeout(() => {
        message.channel.fetchMessages({limit: 100})
        .then(messages => {
          messagear = messages.array();
          messagear = messagear.filter(message => message.author.id === bot.user.id && message.content.includes("HP remaining"));
          messagear.length = 20;
          messagear.map(message => message.delete().catch(console.error));
        });
      }, (times * 1500) + 2000);
      
      function send(content, times) {
        setTimeout(() => {
          message.channel.send(content);
        }, 1500 * times);
      }
    } else {
      message.reply("please mention someone!");
    
  }
  };

  exports.help = {
    name: 'Fight',
    description: 'Lets users fight eachother',
    usage: 'Fight'
};
}