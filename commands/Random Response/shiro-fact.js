const Command = require("../../base/Command.js");
const facts = require('../../assets/json/shiro.json');

class ShiroFact extends Command {
  constructor(client) {
    super(client, {
      name: "shiro-fact",
      description: "Sends a fact about the bot.",
      category: "Random Response",
      usage: "shiro-fact",
      aliases: ["bot-fact"]
    }); 
  }

  async run(message) { 
    let fact = facts[Math.round(Math.random() * (fact.length - 1))];
    return message.channel.send(fact);
  }
}

module.exports = ShiroFact;