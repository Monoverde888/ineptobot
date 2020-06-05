module.exports = (client, message, args) => { 
    message.channel.send(`Nombre del servidor: ${message.guild.name}\nMiembros en total: ${message.guild.memberCount}\nCreado el: ${message.guild.createdAt}\nRegion: ${message.guild.region}`); 
    guildOnly: true //lgtm [js/useless-expression]
  }