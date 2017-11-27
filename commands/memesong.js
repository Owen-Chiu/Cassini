
exports.run = async(Client, message, args) => {
    const Discord = require('discord.js');


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

  exports.help = {
    name: 'Meme Song',
    description: 'picks a meme song',
    usage: 'Meme Song'
};
}