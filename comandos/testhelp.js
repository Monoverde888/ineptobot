const Discord = require('discord.js')
module.exports = (client, message, args) => {
let embed = new Discord.MessageEmbed()
.setAuthor("Hola!")
.setDescription("Este bot esta en progreso todavia pero los comandos son:")
.setFooter("footer")
.setColor("RANDOM")
message.channel.send(embed)
//RECORDATORIO, SIEMPRE HACER EL EMBED ANTES DEL MESSAGE.CHANNEL.SEND, O SI NO NO ENVÍA NADA
}
