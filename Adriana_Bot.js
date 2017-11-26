const Discord = require('discord.js');
const Client = new Discord.Client();
const settings = require('./settings.json');
//const schedule = require('node-schedule');


Client.on("ready", () => {
  Client.user.setGame("Exploring Space")
  console.log("I am ready!");
});

/*
Client.on("guildMemberAdd", number => {
  let guild = member.guild;
  guild.defaultChannel.send('Welcome ${Guild.user.username} to the server')
});

Client.on("guildMemberRemove", number => {
  let guild = member.guild;
  guild.defaultChannel.send('Good bye ${Guild.user.username}')
});

*/

var prefix = "*";

//ping the  bot 
Client.on("message", message => {
  if(!message.content.startsWith(prefix)) return; 
  let args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if(message.author.bot) return; 

  if(message.content.startsWith(prefix + "ping")) {
    message.channel.send('pong beep boop');
  //message.channel.send('Pong!' \ '${Date.now() - message.createdTimestamp' ms\'');
}  else

if(message.content.startsWith(prefix + "setgame")){
  let modRole = message.guild.roles.find("name", "Owner")
  if(message.member.roles.has(modRole.id)){
    Client.user.setGame(argresult);
  }else {
     message.channel.send("You can't do this");
  }
}


if (message.content.startsWith(prefix + "say")){
  message.channel.send(args.join(" "));
  //message.delete(); 
}

if(message.author.bot) return; 
if(!message.content.startsWith(prefix)) return;
  
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  


 if (message.content.startsWith(prefix + 'Dog') || message.content.startsWith(prefix + 'dog')) {
    message.channel.send("", {files: ["https://68.media.tumblr.com/0a51a580a4da096df6a705bb8f49c8ec/tumblr_ny67j0KPTf1txvwmco1_250.png"]});
  }


  if(message.content.startsWith(prefix + "github")){
    message.channel.send("Check out my github here: https://github.com/Adrianamm/Cassini")
  }

  if(message.content.startsWith(prefix + "FakeFacts")){
    var Facts = [
      'If every horse was an Oxgyen atom, we would all die',
      'Donkey backwards spells Donkey',
      'Eggs bounce when you throw them',
      'Glass is unbreakable',
      'NASA has it own McDonalds built into it',
      'NASA stands for Not A Sassy Avocado',
      'Carrots are explosive when put into a microwave for 20 seconds',
      'Hummingbirds are fake',
      '2+2 is 9',
      'Staring at the sun is good for you',
      'Sunblock does not work',
      'The moon is made out of cheese',
      'Pineapple goes well on pizza'
    ]
    var Fact = Math.floor(Math.random()*Facts.length);
    message.channel.send(`${Facts[Fact]}`)
  }


  if(message.content.startsWith(prefix + "MemeSong") || message.content.startsWith(prefix + "memesong")){
    var Array = [
      'https://youtu.be/RxbqKU4j1fU',
      'https://youtu.be/Je_8A5hurSY',
      'https://youtu.be/zPqYVBFtBkw',
      'https://youtu.be/vcaPiiFZu2o',
      'https://youtu.be/u_ZtiOWdVHU',
      'https://youtu.be/lYbGEfoOUbs',
      'https://youtu.be/3H2hWgVbblw',
      'https://youtu.be/nDN7M0J3HXc',
      'https://youtu.be/ZZ5LpwO-An4',
      'https://youtu.be/Byt2D_8acz0'
    ];
    var Meme = Math.floor(Math.random()*Array.length);
    message.channel.send(`${Array[Meme]}`)
  }

  
    
    if(command === "help" || command === "Help")
    message.channel.send({embed: {
      color: 3447003,
      description: "What bot do",
      author: {
        name: Client.user.username,
        icon_url: Client.user.avatarURL
      },
      fields: [
      {
        name: "*Dog",
        value: "Give you the UnderTale Dog because why not"
      },
      {
        name:"*MemeSong",
        value:"Gives you a good meme song",
      },
      {
        name:"*FakeFacts",
        value:"Gives you a fake fact",
      }, 
      {
        name:"*fight or *Fight",
        value:"Fights"
      },
      {
        name:"*github",
        vaule:"Gives link to github"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: Client.user.avatarURL,
      text: Client.user.avatarURL
    }
    }});



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


//_________________________________________________________________

    }//not delete 
  );//not deleting

 



Client.login(settings.token);
