// Mono porfin logro añadir embeds a su bot, como lo hizo? bueno lo que hizo fue borrar
// todos los restos de discord.js v11 del compu y solo quedarse con discord.js v12, bueno adios.
// 04/06/2020
const Discord = require ("discord.js")
module.exports = (client, message, args) => {
var rpts = ["yo creo que si" , "no" , "mas o menos" , "si" , "no te entendi" , "yo creo que no" , "no soy tan inteligente" , "ok" , ];

    let pregunt = args.join(' ')
    if (!pregunt) return message.channel.send(" <:zcsrechazo:712752306830967357> no has escrito ninguna pregunta porfavor, escribe una.")//mensaje de error
    let respuestarandom = rpts[Math.floor(Math.random() * rpts.length)]
    const embed1 = new Discord.MessageEmbed()
    .setTitle('Comando | 8ball')
    .setThumbnail(message.author.displayAvatarURL())
        .addField("Su pregunta es:", args, true)
        .addField("Mi respuesta es:", `${respuestarandom}`, true)
        message.channel.send({embed:embed1})
}
