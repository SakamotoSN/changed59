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
      "map 1 : :ballot_box_with_check:\nmap 2 : :ballot_box_with_check:\nmap 3 : :ballot_box_with_check:\nmap 4 : :ballot_box_with_check:\nmap 5 : :ballot_box_with_check:\nmap 6 : :ballot_box_with_check:\nmap 7 : :ballot_box_with_check:\nmap 8 : :ballot_box_with_check:\nmap 9 : :ballot_box_with_check:\nmap 10 : :ballot_box_with_check:\nmap 11 : :ballot_box_with_check:\nmap 12 : :ballot_box_with_check:\nmap 13 :ballot_box_with_check:\nmap 14 :ballot_box_with_check:\nmap 15 :ballot_box_with_check:\nmap 16 :ballot_box_with_check:\nmap 17 :ballot_box_with_check:\nmap 18 :ballot_box_with_check:\nmap 19 :ballot_box_with_check:\nmap 20 :ballot_box_with_check:")
      .addField("21-40",
      "map 21 :ballot_box_with_check:\nmap 22 :ballot_box_with_check: (merci Quentin pour l'aide)\nmap 23 :ballot_box_with_check:\nmap 24 :ballot_box_with_check:\nmap 25 :x:\nmap 26 :ballot_box_with_check:\nmap 27 :ballot_box_with_check:\nmap 28 :x:\nmap 29 :x:\nmap 30 :x:\nmap 31 :x:\nmap 32 :x:\nmap 33 :x:\nmap 34 :x:\nmap 35 :x:\nmap 36 :x:\nmap 37 :x:\nmap 38 :x:\nmap 39 :ballot_box_with_check: (traduction donner par Mister.Hex)\nmap 40 :ballot_box_with_check: (traduction donner par Mister.Hex)")
    .addField("41-60",
    "map 41 :ballot_box_with_check: (traduction donner par Mister.Hex)\nmap 42 :ballot_box_with_check: (traduction donner par Mister.Hex)\nmap 43 :x:\nmap 44 :x:\nmap 45 :x:\nmap 46 :x:\nmap 47 :x:\nmap 48 :x:\nmap 49 :x:\nmap 50 :x:\nmap 51 :x:\nmap 52 :x:\nmap 53 :x:\nmap 54 :x:\nmap 55 :x:\nmap 56 :x:\nmap 57 :x:\nmap 58 :x:\nmap 59 :x:\nmap 60 :x:")
    .addField("61-82",
    "map 61 :x:\nmap 62 :x:\nmap 63 :x:\nmap 64 :x:\nmap 65 :x:\nmap 66 :x:\nmap 67 :x:\nmap 68 :x:\nmap 69 :x:\nmap 70 :x:\nmap 71 :x:\nmap 72 :x:\nmap 73 :x:\nmap 74 :x:\nmap 75 :x:\nmap 76 :x:\nmap 77 :x:\nmap 78 :x:\nmap 79 :x:\nmap 80 :x:\nmap 81 finis :D\nmap 82 finis :D")  
    message.channel.send({embed});
}
}
}     
)
