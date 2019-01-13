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
    .setTitle("Avancement de la traduction:")
    .setColor(0x0086AE)
    .setDescription("et voila l'avancement")
    .setFooter("(metre ici le pourcentage)")
    .addField("1-30",
      "map 1 : verifier la map pour la confirmer\nmap 2 : verifier la map pour la confirmer\nmap 3 : verifier la map pour la confirmer\nmap 4 : verifier la map pour la confirmer\nmap 5 : verifier la map pour la confirmer\nmap 6 : verifier la map pour la confirmer\nmap 7 : verifier la map pour la confirmer\nmap 8 : verifier la map pour la confirmer\nmap 9 : verifier la map pour la confirmer\nmap 10 : verifier la map pour la confirmer\nmap 11 : verifier la map pour la confirmer\nmap 12 : verifier la map pour la confirmer\nmap 13 verifier la map pour la confirmer\nmap 14 verifier la map pour la confirmer\nmap 15 verifier la map pour la confirmer\nmap 16 verifier la map pour la confirmer\nmap 17 verifier la map pour la confirmer\nmap 18 verifier la map pour la confirmer\nmap 19 verifier la map pour la confirmer\nmap 20 verifier la map pour la confirmer\nmap 21 verifier la map pour la confirmer\nmap 22 verifier la map pour la confirmer (merci Quentin pour l'aide)\nmap 23 verifier la map pour la confirmer\nmap 24 verifier la map pour la confirmer\nmap 25 a traduire\nmap 26 verifier la map pour la confirmer\nmap 27 verifier la map pour la confirmer\nmap 28 a traduire\nmap 29 a traduire\nmap 30 a traduire")
      .addField("31-60",
      "map 31 a traduire\nmap 32 a traduire\nmap 33 a traduire\nmap 34 a traduire\nmap 35 a traduire\nmap 36 a traduire\nmap 37 a traduire\nmap 38 a traduire\nmap 39 verifier la map pour la confirmer (traduction donner par Mister.Hex)\nmap 40 verifier la map pour la confirmer (traduction donner par Mister.Hex)\nmap 41 verifier la map pour la confirmer (traduction donner par Mister.Hex)\nmap 42 verifier la map pour la confirmer (traduction donner par Mister.Hex)\nmap 43 a traduire\nmap 44 a traduire\nmap 45 a traduire\nmap 46 a traduire\nmap 47 a traduire\nmap 48 a traduire\nmap 49 a traduire\nmap 50 a traduire\nmap 51 a traduire\nmap 52 a traduire\nmap 53 a traduire\nmap 54 a traduire\nmap 55 a traduire\nmap 56 a traduire\nmap 57 a traduire\nmap 58 a traduire\nmap 59 a traduire\nmap 60 a traduire")
    .addField("61-82",
    "map 61 a traduire\nmap 62 a traduire\nmap 63 a traduire\nmap 64 a traduire\nmap 65 a traduire\nmap 66 a traduire\nmap 67 a traduire\nmap 68 a traduire\nmap 69 a traduire\nmap 70 a traduire\nmap 71 a traduire\nmap 72 a traduire\nmap 73 a traduire\nmap 74 a traduire\nmap 75 a traduire\nmap 76 a traduire\nmap 77 a traduire\nmap 78 a traduire\nmap 79 a traduire\nmap 80 a traduire\nmap 81 finis :D\nmap 82 finis :D")
      message.channel.send({embed});
}
}
}     
)
