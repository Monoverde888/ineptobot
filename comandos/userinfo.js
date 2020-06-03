module.exports = (client, message, args) => { 
    message.channel.send(`Tu nombre de usuario: ${message.author.username}\nTu id: ${message.author.id}`); 
  
  }