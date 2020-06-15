module.exports = (client, message, args) => {
    let texto = args.join(' ');
    if(!texto) return message.channel.send('Debe escribir un mensaje.')
    message.delete()
    message.channel.send(texto);
  console.log(texto)
  }
