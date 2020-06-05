const Discord = require("discord.js")
module.exports = (client, message) => {
 let estadouser = {


   "online":"Online  <:online:717140522157867018>", 
   "idle":"Ausente  <:idle:717140483859808288>",
   "dnd":"No Molestar  <:dnd:717140872298233856>",
   "invisible":"Invisible/Desconectado  <:offline:718510445308411946>",
 } 


let userm = message.mentions.users.first()

if(!userm){
  var user = message.author;

  const embed = new Discord.MessageEmbed()
    .setThumbnail(user.avatarURL)
    .setAuthor('Info de ' + user.username+'#'+user.discriminator, user.avatarURL)
    .setColor("RANDOM")  
    .addField('Nombre', user.username, true)
    .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
    .addField('ID', user.id, true)
    .addField('Estado', estadouser[user.presence.status], true)
    .addField("¿Es un BOT?", user.bot)
    .addField('Apodo', message.member.nickname, true)
    .addField('Cuenta Creada', user.createdAt.toDateString(), true)
    .addField('Fecha de Ingreso', message.member.joinedAt.toDateString(), true)
    .addField('Roles', message.member.roles.cache.map(roles => roles.name).join(', '), true)
    .setFooter("Solicitado por "+message.author.username+"", message.author.avatarURL)

  message.channel.send(embed);
}else{
  //Este embed es para cuando el usuario menciona a alguien haciendo el comando
  const embed = new Discord.MessageEmbed()
    .setThumbnail(userm.avatarURL)
    .setAuthor('Info de ' + userm.username+'#'+userm.discriminator, userm.avatarURL)
    .setColor("RANDOM")
    .addField('Nombre', userm.username, true)
    .addField('Jugando a', userm.presence.game != null ? userm.presence.game.name : "Nada", true)
    .addField('ID', userm.id, true)
    .addField('Estado', estadouser[userm.presence.status], true)
    .addField("¿Es un BOT?", userm.bot)
    .addField('Apodo', message.member.nickname, true)
    .addField('Cuenta Creada', userm.createdAt.toDateString(), true)
    .addField('Fecha de Ingreso', message.member.joinedAt.toDateString(), true)
    .addField('Roles', message.member.roles.cache.map(roles => +roles.name).join(', '), true)
    .setFooter ("Solicitado por "+message.author.username+"", message.author.avatarURL)

  message.channel.send(embed)
}}