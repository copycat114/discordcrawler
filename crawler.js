const Discord = require('discord.js');

const client = new Discord.Client();

const config = require('./config.json');

client.on('message', message => {
  if(message.channel.type == "text") {
    if(message.author.id != client.user.id) {
      if(message.guild.id.toString() != client.channels.get(config.channelid).guild.id) {
        if(message.toString().indexOf("discord.gg/") >= 0) {
          const destin = client.channels.get(config.channelid);
	      destin.send("Invite Link Found: " + message.content.substring(message.toString().indexOf("discord.gg/"),message.toString().indexOf("discord.gg/") + 16));
		  destin.sendMessage("", {embed: {
            color: 13376797,
	        author: {
              name: message.author.username + " in " + message.guild.name,
              icon_url: message.author.avatarURL
            },
	        description: message.content
          }});
		  console.log('Found invite link: ' + message.content.substring(message.toString().indexOf("discord.gg/"),message.toString().indexOf("discord.gg/") + 16));
        };
      };
    };
  };
});

client.on('ready', () => {
  console.log('Invite Crawler logged in as: ' + client.user.username);
});

client.login(config.token);