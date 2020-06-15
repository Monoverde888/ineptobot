const Discord = require ("discord.js")
module.exports = (client, message, args) => {
const embed1 = new Discord.MessageEmbed()
    .setTitle('Invitacion')
    .setThumbnail(message.author.displayAvatarURL())
        .setDescription("Aqui va mi invite!")
//        Si estas leyendo esto la invite es un rick roll xd    
        .addField("https://discord.com/api/oauth2/authorize?client_id=711388859426144257&permissions=8&redirect_uri=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&scope=bot")
        .setImage("https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif")
        console.log(message.author.username)
        message.channel.send({embed:embed1})
}
