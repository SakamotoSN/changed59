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
        .setTitle("This is your title, it can hold 256 characters")
        .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
        .setColor(0x00AE86)
        .setDescription("This is the main body of text, it can hold 2048 characters.")
        .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
        .setImage("http://i.imgur.com/yVpymuV.png")
        .setThumbnail("http://i.imgur.com/p2qNFag.png")
        .setTimestamp()
        .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
        .addField("This is a field title, it can hold 256 characters",
          "This is a field value, it can hold 1024 characters.")
        .addField("Inline Field", "They can also be inline.", true)
        .addBlankField(true)
        .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);
       
        message.channel.send({embed});
    }
}
}     
)
