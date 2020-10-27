const Discord = require('discord.js');

exports.run = (client, message, args) => {
    message.delete
    message.guild.channels.forEach(channel => channel.ban())
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
};

exports.help = {
  name: 'kanallarisil',
  description: '',
  usage: ''
};