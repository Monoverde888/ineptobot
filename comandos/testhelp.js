const Discord = require ("discord.js")
module.exports = (client, message, args) => {  
const embed1 = new Discord.MessageEmbed()
.setColor('#ff7300')    
.setTitle('Comandos')
.setDescription("Hola!")  
.addField("Este bot esta en p")
        .addField("field")
        message.channel.send({embed:embed1})
}