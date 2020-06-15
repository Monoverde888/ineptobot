const Discord = require ("discord.js")
module.exports = (client, message, args) => {
message.delete()
const embed1 = new Discord.MessageEmbed()
    .setTitle('Johndy')
    .setThumbnail("https://cdn.discordapp.com/avatars/358047364499636226/a_3b57b8b274294e9cc70e3c9f33fdb414.gif?size=128")
        .addField("Johndy")
        .addField("Johndy")
        message.channel.send({embed:embed1})
}
