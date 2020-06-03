const Discord = require ("discord.js")

module.exports = (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL)
.setDescription("El uso es: **__`?reverse <mensaje>`__")
.setColor("RANDOM")

if(!args[0]) return message.channel.send(embed);
const reverse = args.join(" ").split(" ").reverse(
    message.channel.send(args.join(" ").split("").reverse().join(""))

);
}