const Discord = require('discord.js');
const Client = new Discord.Client();
const settings = require('./settings.json');
//const schedule = require('node-schedule');


Client.on("ready", () => {
  Client.user.setGame("*I am broken")
  console.log("I am ready!");
});

Client.on("guildMemberAdd", number => {
  let guild = member.guild;
  guild.defaultChannel.send('Welcome ${Guild.user.username} to the server')
});

Client.on("guildMemberRemove", number => {
  let guild = member.guild;
  guild.defaultChannel.send('Good bye ${Guild.user.username}')
});



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

var day = 82; 
var Coin = false; 


if(message.content.startsWith(prefix + "True")){
  let modeRole = message.guild.roles.find("name", "Owner")
  if(message.member.roles.has(modRole.id)){
     Coin = true;
  }
}




if(message.content === "how many days until kick off") {
  message.channel.send("86");
  console.log('set off test by ${bot.username}');
  
}



if(message.author.bot) return; 
if(!message.content.startsWith(prefix)) return;
  
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  

if (command === "say"){
    message.channel.send(args.join(" "));
    //message.delete(); 
 }


 if (message.content.startsWith(prefix + 'Dog') || message.content.startsWith(prefix + 'dog')) {
    message.channel.send("", {files: ["https://68.media.tumblr.com/0a51a580a4da096df6a705bb8f49c8ec/tumblr_ny67j0KPTf1txvwmco1_250.png"]});
  }

/*
  if(message.content.startsWith(prefix + "Christina")){
    message.channel.send('<@351144445938368513> You are an ok person');
  } 

*/

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
        name:"*Christina",
        value:"Tells Christina that she is an okay person. IS BROKEN"
      },
      {
        name:"*fight or *Fight",
        value:"Fights"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: Client.user.avatarURL,
      text: Client.user.avatarURL
    }
    }});


   //Creator stuff 
   if (message.content.startsWith(prefix + 'Update')) {
    if (message.author.id == '147815677699293185'){
      message.channel.send("Updating....");    
    }
  }

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

  //owner stuff 
  if (message.content.startsWith(prefix + 'Reset')) {
    if (message.author.id == '147815677699293185'){
      message.channel.send("Restarting...."); 
    }
    if(message.author.id != '147815677699293185'){
      message.channel.send("You don't have premissions to do that");
    }
  }

  if (message.content.startsWith(prefix + 'Down')) {
    if (message.author.id == '147815677699293185'){
      message.channel.send("**UPDATE** Bot will be shutting down for at least one hour"); 
    }
  }

  if (message.content.startsWith(prefix + 'Start')) {
    if (message.author.id == '147815677699293185'){
      message.channel.send("Ready for lift off in 5,4,3,2,1"); 
    }
    if(message.author.id != '147815677699293185'){
      message.channel.send("You don't have premissions to do that");
    }
  }
 


  if (message.content.startsWith(prefix + 'ChristinaQuote')){
    var Quote = [
      'tickle my pickle',
      'mr friedman could stab me like 20 times and i would apologize to him for making a mess with my blood - Christina',
      'mrfriedman is typing - Christina',
      'https://cdn.discordapp.com/attachments/351146680449761281/363799042825650176/image.jpg - Christina',
      'there is a picture of shrek with sonic licking his nipples but i dont want to get blocked again so im not going to send it - Christina',
      '@christina#0957 tagging myself lol bill jobs is shook - Christina',
      'but no homo tho - Christina',
      'might fuck around and put it deep in Elon musk - Christina',
      'NO SWEARING ON MY CHRISTIAN SERVER - Christina',
      'https://cdn.discordapp.com/attachments/351146680449761281/359128456610578455/image.jpg - Christina',
      'am i edgy enough for u bby - Christina',
      'while elena is shopping im looking for food that say nut on them and laughing at it - Christina',
      'i found all of the nuts - Christina',
      'yes daddy no daddy - Christina',
      'DRESS UP AS THE KOOL AID MAN AND ILL FUCKING BODY SLAM YOU ALL THE WAY TO THE FIRST FLOOR - Christina',
      'first good night to guy fieri - Christina',
      'i almost drown myself drinking water - Christina',
      'EDGY BAXTER IS SHAKING stip sto stop - Christina',
      'https://cdn.discordapp.com/attachments/351146680449761281/361602108329426954/image.jpg - Christina',
      'this is not my first time being block u ass succ deez nuts - Christina',
      'mr friedboi - Christina',
      'oh fuck i missed 420 - Christina',
      'https://cdn.discordapp.com/attachments/351146680449761281/361613216767410176/Screenshot_20170924-161455.png - Christina',
      '@ everyone succ my nuts - Christina',
      'I want Guy fieri to laver me up in hot sauce - Christina',
      'I have a gmail called Gaydaddyhotsauce - Christina',
      'ma asssss - Christina',      
      'https://cdn.discordapp.com/attachments/366749282449227777/366761853306667009/unknown.png',
      'i have a small dicc - Christina'
    ];
    var Gross = Math.floor(Math.random()*Quote.length);
    message.channel.send(`${Quote[Gross]}`)
  }

  if (message.content.startsWith(prefix + 'Owenisrude')){
    var Quotes = [
      'mrfriedman is typing - Christina',
      'https://cdn.discordapp.com/attachments/351146680449761281/363799042825650176/image.jpg - Christina',
      'there is a picture of shrek with sonic licking his nipples but i dont want to get blocked again so im not going to send it - Christina',
      '@christina#0957 tagging myself lol bill jobs is shook - Christina',
      'but no homo tho - Christina',
      'NO SWEARING ON MY CHRISTIAN SERVER - Christina',
      'https://cdn.discordapp.com/attachments/351146680449761281/359128456610578455/image.jpg - Christina',
      'am i edgy enough for u bby - Christina',
      'while elena is shopping im looking for food that say nut on them and laughing at it - Christina',
      'i found all of the nuts - Christina',
      'yes daddy no daddy - Christina',
      'DRESS UP AS THE KOOL AID MAN AND ILL FUCKING BODY SLAM YOU ALL THE WAY TO THE FIRST FLOOR - Christina',
      'first good night to guy fieri - Christina',
      'i almost drown myself drinking water - Christina',
      'EDGY BAXTER IS SHAKING stip sto stop - Christina',
      'https://cdn.discordapp.com/attachments/351146680449761281/361602108329426954/image.jpg - Christina',
      'this is not my first time being block u  - Christina',
      'mr friedboi - Christina',
      'oh fuck i missed 420 - Christina',
      'https://cdn.discordapp.com/attachments/351146680449761281/361613216767410176/Screenshot_20170924-161455.png - Christina',
      'https://cdn.discordapp.com/attachments/366749282449227777/366761853306667009/unknown.png'
    ];
    var Grosss = Math.floor(Math.random()*Quotes.length);
    message.channel.send(`${Quotes[Grosss]}`)
  }

// WIP stuff
  var day = 82;
  
  if (message.content.startsWith(prefix + 'Kick')) {
    if (message.author.id == '147815677699293185'){
          var coin = false; 
          if(coin = false){
            day ++;
          } else {
            message.channel.send("There are " + day + " days" + " until kickoff");
          }
  } 
    if (message.author.id !== '147815677699293185'){
        message.channel.send("no no no ");
    }
  }



  if(message.content.startsWith(prefix + "Kickoff")){
    let modRole = message.guild.roles.find("name","Owner")
    if(message.member.roles.has(modRole.id)){
      if(coin = false){
        while(coin = false){
          day = day + 1; 
        } 
      } else {
        day = day + 1;
        message.channel.send(day + "_Days until kick off.");
      }
    } else {
      message.channel.send("Bro you can't do that");
    }
  }


//_________________________________________________________________

    }//not delete 
  );//not deleting

 



Client.login(settings.token);
