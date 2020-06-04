const Discord = require ("discord.js")
module.exports = (client, message, args) => {  
const embed1 = new Discord.MessageEmbed()
.setColor('RANDOM')    
.setImage("https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif")
.setTitle('Comandos')
.addField("!invite")
.setDescription("Este bot esta en progreso todavia pero los comandos son:")

      
        message.channel.send({embed:embed1})
}
