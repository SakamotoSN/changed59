const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const client = new Discord.Client();

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ histoires: [],  xp: []}).write()

var prefix = ("ch!")



bot.on('ready', function() {
    bot.user.setUsername("Changed bot")
    bot.user.setPresence({ game: { name: 'observer du latex'}, status: 'online'}) //en ligne;
    console.log("Connected")
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content.startsWith(prefix + "dit")){
        if("234368202379886593".includes(message.author.id)){
        let args = message.content.split(" ").slice(1)
        let thingToEcho = args.join(" ")
        message.delete();
        message.channel.send(`${thingToEcho}`)  
    }else{
        message.delete();
    }
    if (message.content === prefix + "trad" ){  

        const embed = new Discord.RichEmbed()
        .setTitle("Commande pour le Sigbot")
        .setColor(0x0086AE)
        .setDescription("Voici les commande que le bot peu faire :D")
        .setFooter("Pour plus d'info demander a son créateur :3")
        .addField("parler lui :D",
          "(si vous ete chanceux il vous parlera si son créateur est pas loin)")
          .addField("commande special",
          "sigbot!ASDF Movie (car c'est drole les ASDF Movie '^')")
          .addField("commande ~~vraiment~~ utile",
          "sigbot!xp")
          .addField("jeux",
          "G-N start / stop (c'est un jeu ou vous devez deviner un nombre start pour le lancer et stop pour l'areter)")
      
        message.channel.send({embed});
    }
}
}     
)
