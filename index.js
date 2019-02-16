const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const client = new Discord.Client();

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ histoires: [],  xp: []}).write()

var prefix = (">")



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
}
if (message.content.startsWith(prefix + "journal")){
    var embed = new Discord.RichEmbed()
    .setTitle("Iphone X Demon")
    .addField("***Journal des Démons du mois de Février***", "...")
    .addField("Union Upsilon : Extermination par les démons ?", "La semaine dernière , L'Union Upsilon à du faire face au 3 chefs démoniaque !\nLeur chef , Guten , nous explique leur défaite :\n*Nous étions environ 50 000 face à eux ! Notre Union étant l'une des plus puissante , pensions gagner facilement quand les 3 grands chefs démoniaque sont apparus et ont exterminés les*")
    .setColor(0xD4FE00)
    message.channel.send(embed)
}
}  
)
