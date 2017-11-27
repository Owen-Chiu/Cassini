

f(message.content.startsWith(prefix + "FakeFacts")){
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