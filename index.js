const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const client = new Discord.Client();

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ histoires: [],  xp: []}).write()

var prefix = ("m!")

bot.on('ready', function() {
    bot.user.setUsername("MagicBot")
    bot.user.setPresence({ game: { name: 'brûler des mages malpoli'}, status: 'online'}) //en ligne;
    console.log("Connected")
});

bot.login(process.env.TOKEN);


bot.on('message', message => {

















        if(message.content.startsWith(prefix + "feu")){
            if(messagementions.users) {
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setThumbnail(message.author.avatarURL)
            .setDescription(`${message.author} lance la capacité **Feu** sur ${message.mentions.users.first()} !\nDégâts : **25** pv`)
            .setColor(0xcc0099)
            .setImage("https://orangemushroom.files.wordpress.com/2014/04/ignition-effect.gif")
            
            message.channel.send({embed})
        }
    }else{
        const embed = new Discord.RichEmbed()
        .setTitle(``)
        .setThumbnail(message.author.avatarURL)
        .setDescription(`${message.author} lance la capacité **Feu** sur personne !\nDégâts : **25** pv`)
        .setColor(0xcc0099)
        .setImage(file ["./image/rrjd8p.png"])
        
        message.channel.send({embed})

    }
}
)
