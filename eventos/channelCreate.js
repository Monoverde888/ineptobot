module.exports = (client, channel) => {
        // Verificamos si nuestro bot tiene permisos de ver el log de auditoria de un servidor
        if(!channel.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
       
        // Verificamos que sea en un servidor
        if(!channel.guild) return;
       
        // Solicitamos los datos del logs de la auditoria registrado en un servidor
        channel.guild.fetchAuditLogs().then(logs => { 
         // Obtenemos el id de usuario autor del log
         let userID = logs.entries.first().executor.id;
         // Obtenemos el avatar de usuario autor del log
         let userAvatar = logs.entries.first().executor.avatarURL();
       
         let msgChannel = new Discord.MessageEmbed()
           .setTitle('**[CANAL CREADO]**')
           .setColor('RED')
           .setThumbnail(userAvatar)
           .setDescription(`**Canal creado**\nCanal: ${channel.name} (ID: ${channel.id})\nTipo: ${channel.type}\nPor: <@${userID}> (ID: ${userID})`)
           .setTimestamp()
           .setFooter(channel.guild.name, channel.guild.iconURL())
             
           // Enviamos el mensaje a un canal según el ID-CANAL
           let channel = client.channels.cache.get('710607482493337603');
           channel.send(msgChannel);
          
        })
        
       }
    