const Command = require('../../base/Command.js');
const prefix = require('../../process.env')

class Prefix extends Command {
  constructor(client) {
    super(client, {
      name: "prefix",
      description: "Returns the command prefix for the current server.",
      category: "Core",
      usage: "prefix",
      guildOnly: true
    });
  }

  async run(message, settings) { 
    message.channel.send ({
      embed: {
        color: 'RANDOM',
        description: `Current prefix is ${settings.Prefix}`
      }
    })
   
  }
}

module.exports = Prefix;
