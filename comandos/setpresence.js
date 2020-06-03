module.exports = (client, message, args) => { 
    let texto = args.join(' ');
    if(!texto) return message.channel.send('Debe escribir una presencia.')
    message.delete()
    message.channel.send('Presencia cambiada'); 
    client.user.setActivity(texto)
    console.log(texto)
  }
