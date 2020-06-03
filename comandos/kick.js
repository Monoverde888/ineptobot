module.exports = (client, message, args, users) => {

    let user = message.mentions.users.first();
    let razón = args.slice(1).join(' ');
    
    var perms = message.member.hasPermission("KICK_MEMBERS");
    
    if (!perms) return message.channel.send("`Error ❌` `|` No tienes permisos para hacerlo!.");
    if (message.mentions.users.size <1) return message.reply('Debe mencionar a alguien').catch(console.error);
    
    if (!razón) return message.channel.send('Escriba una razón, `?kick @username [razón]`');
    if (!message.guild.member(user).kickable) return message.reply('No puedo kickear al usuario mencionado :confused:');
    
    message.guild.member(user).kick(razón);
    message.channel.send(`**${user.username}**, fue kickeado correctamente del servidor.`);
    }