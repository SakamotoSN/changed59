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
    .setDescription("fait : :white_check_mark:\na verifier : :ballot_box_with_check: \nnon fait : :x:\nprobleme : :no_entry:")
    .setFooter("(metre ici le pourcentage)")
    .addField("1-20",
      "NOOO")
      message.channel.send({embed});
    }
}
}     
)
