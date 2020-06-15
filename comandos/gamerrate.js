const Discord = require('discord.js')
module.exports = (client, message, args) => {


const numero = Math.floor((Math.random() * 90))+10
 message.channel.send({embed: {
   color: "RANDOM",
   description: ' Eres un: ' + numero + '% Gamer :sunglasses: '

 }});
}
