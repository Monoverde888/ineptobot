//Esta función se activara cuando el evento haya iniciado:
module.exports = (client) => {
  
    client.user.setPresence( 
      {
        status: "online", 
        game: { 
          name: 'Terraria', 
          url: null, // Establece el enlace del juego si el tipo es "STREAMING".
          type: "PLAYING"
        }
      }
    );
   
    
  }
  
  