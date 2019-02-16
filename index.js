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
    .addField("**Transition**", "Voici les Commandes Disponibles !")
    .addField("```actions```", "```a_calin @mention\na_tue @mention\na_claque @mention\na_embrasse @mention```")
    .setColor(0x66c2ff)
    .addField("```Admin```", "```a_warn @mention raison\na_dit message```")
    message.channel.send(embed)
}
}  
)
