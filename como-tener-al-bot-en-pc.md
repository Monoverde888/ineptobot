# Como tener al bot en pc

## Como tener al bot en pc

Hola!

Si llegaste aqui seguramente quieres tener al bot

Primero que todo tienes que tener node.js instalado, lo puedes instalar [aqui](https://nodejs.org/es/)

Despues tienes que instalar git [aqui](https://git-scm.com/download/win)

Cuando ya lo hayas instalado abre la linea de comandos y ve a la carpeta de tu bot asi

```bash
cd carpeta del bot
```

Cuando hayas hecho eso escribe

```bash
git clone https://github.com/Monoverde888/ineptobot.git
```

Y espera a que termine de clonarse

Despues entra a la carpeta que se creo y ve a ella con la linea de comandos

Escribe

```bash
npm install
```

Despues crea y archivo llamado config.js y pega esto

```javascript
// No quites las comillas al principio y fin de token y prefix
let config = {
    token: "TOKEN", // Reemplaze esto con el token de tu de bot.
    prefix: "prefijo", // El prefix de su bot para indentificar sus comandos.

  }

  // Aqui exportamos el objeto config:
  module.exports = config;
```

Despues de pegar eso remplaza token por el token de tu bot y prefijo por el prefijo que quieres que tenga \(Ejemplo: %\)

Si no sabes como hacer un bot y todo eso lee esta [guia](https://portalmybot.com/guia/mybot/cuenta-discord#crear-app), ignora las otras paginas ya que no son necesarias para este bot

Despues de hacer todo eso en la linea de comandos en la carpeta del bot escribe

```bash
node bot.js
```

Si no te sirvio esto crea un [problema](https://github.com/Monoverde888/ineptobot/issues/new) en la pagina del bot.

Bueno adios espero que te haya servido esto
