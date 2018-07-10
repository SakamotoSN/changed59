const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const client = new Discord.Client();

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ histoires: [],  xp: []}).write()

var prefix = ("m!")
var magic_use = 0;

bot.on('ready', function() {
    bot.user.setUsername("MagicBot")
    bot.user.setPresence({ game: { name: 'brûler des mages malpoli'}, status: 'online'}) //en ligne;
    console.log("Connected")
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
 


     if(message.content.startsWith(prefix + "feu")){
        if(message.mentions.users.first()){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setThumbnail(message.author.avatarURL)
            .setDescription(`${message.author} lance la capacité **Feu** sur ${message.mentions.users.first()} !\nDégâts : **25** pv`)
            .setColor(0xcc0099)
            .setImage("https://raw.githubusercontent.com/hugo59191/MagicBot/master/image/feu.gif")
            
            message.channel.send({embed})
        }else{
            if(message.mentions.users.first()){
                const embed = new Discord.RichEmbed()
                .setTitle(``)
                .setThumbnail(message.author.avatarURL)
                .setDescription(`${message.author} lance la capacité **Feu** !\nDégâts : **25** pv`)
                .setColor(0xcc0099)
                .setImage("https://raw.githubusercontent.com/hugo59191/MagicBot/master/image/feu.gif")
                
                message.channel.send({embed})
            }
            magic_use = magic_use + 1
        }
    }









        if(message.content.startsWith(prefix + "tornade")){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setThumbnail(message.author.avatarURL)
            .setDescription(`${message.author} lance la capacité **Tornade** sur ${message.mentions.users.first()} !\nDégâts : **25** pv`)
            .setColor(0xcc0099)
            .setImage("https://pa1.narvii.com/6394/6e5f4ce3b0f5ea1c28d9788aa2a6eb376a041314_hq.gif")
            message.channel.send({embed})
        }

        if(message.content.startsWith(prefix + "stick-magic")){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setThumbnail(message.author.avatarURL)
            .setDescription(`${message.author} lance la capacité **Stick-magic** sur ${message.mentions.users.first()} !\nDégâts : **15** pv`)
            .setColor(0xcc0099)
            .setImage("https://orangemushroom.files.wordpress.com/2012/06/magic-booster-effect.gif")
            message.channel.send({embed})
        }

        if(message.content.startsWith(prefix + "nature")){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setThumbnail(message.author.avatarURL)
            .setDescription(`${message.author} lance la capacité **Orbe de la nature** sur ${message.mentions.users.first()} !\nDégâts : **25** pv`)
            .setColor(0xcc0099)
            .setImage("https://i.pinimg.com/originals/69/eb/43/69eb43047ff86ade658b2c677c0567ee.gif")
            message.channel.send({embed})
        }

        if(message.content.startsWith(prefix + "ice")){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setThumbnail(message.author.avatarURL)
            .setDescription(`${message.author} lance la capacité **Glace** sur ${message.mentions.users.first()} !\nDégâts : **20** pv`)
            .setColor(0xcc0099)
            .setImage("https://blog-imgs-18-origin.fc2.com/e/t/e/eternalhydrogen/skill_21111005_effect.gif")
            message.channel.send({embed})
        }

        if(message.content.startsWith(prefix + "éclair")){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setThumbnail(message.author.avatarURL)
            .setDescription(`${message.author} lance la capacité **éclair** sur ${message.mentions.users.first()} !\nDégâts : **50** pv`)
            .setColor(0xcc0099)
            .setImage("https://i.pinimg.com/originals/d7/f1/0e/d7f10ed0e12dce0a783373c2ae8b2c61.gif")
            message.channel.send({embed})
        }

        if(message.content.startsWith(prefix + "vent")){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setThumbnail(message.author.avatarURL)
            .setDescription(`${message.author} lance la capacité **Vent** sur ${message.mentions.users.first()} !\nDégâts : **5** pv *cumulable avec une autre capacité*`)
            .setColor(0xcc0099)
            .setImage("https://i.pinimg.com/originals/98/51/59/985159cc49c09556b29c2264208028ca.gif")
            message.channel.send({embed})
        }

        if(message.content.startsWith(prefix + "ice-axe")){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setThumbnail(message.author.avatarURL)
            .setDescription(`${message.author} lance la capacité **Ice-axe** sur ${message.mentions.users.first()} !\nDégâts : **50** pv *sauf brulé par du feu* :  **10** *pv*`)
            .setColor(0xcc0099)
            .setImage("https://2img.net/h/i1200.photobucket.com/albums/bb340/x3TheAran595/Chaos21110011effect.gif")
            message.channel.send({embed})
        }

        if(message.content.startsWith(prefix + "slash")){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setThumbnail(message.author.avatarURL)
            .setDescription(`${message.author} lance la capacité **Slash** sur ${message.mentions.users.first()} !\nDégâts : **15** pv`)
            .setColor(0xcc0099)
            .setImage("https://i.pinimg.com/originals/9b/7f/62/9b7f623ff55be9b911b1f20c1f836250.gif")
            message.channel.send({embed})
        }

        if(message.content.startsWith(prefix + "implosion")){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setThumbnail(message.author.avatarURL)
            .setDescription(`${message.author} lance la capacité **Implosion** sur ${message.mentions.users.first()} !\nDégâts : **50** pv`)
            .setColor(0xcc0099)
            .setImage("https://conserver.files.wordpress.com/2010/03/09.gif")
            message.channel.send({embed})
        }

        if(message.content.startsWith(prefix + "protection")){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setThumbnail(message.author.avatarURL)
            .setDescription(`${message.author} se protège !\nDéfend : **25** pv`)
            .setColor(0xcc0099)
            .setImage("https://orangemushroom.files.wordpress.com/2012/06/anti-magic-shell-effect.gif")
            message.channel.send({embed})
        }

        if(message.content.startsWith(prefix + "onde")){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setThumbnail(message.author.avatarURL)
            .setDescription(`${message.author} lance la capacité **Onde** sur ${message.mentions.users.first()} !\nDéfend : **30** pv`)
            .setColor(0xcc0099)
            .setImage("https://orangemushroom.files.wordpress.com/2011/11/energy-buster.gif")
            message.channel.send({embed})
        }

        if(message.content.startsWith(prefix + "soin")){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setThumbnail(message.author.avatarURL)
            .setDescription(`${message.author} lance la capacité **Soin** sur ${message.mentions.users.first()} !\nSoigne : **10** pv`)
            .setColor(0xcc0099)
            .setImage("https://i.pinimg.com/originals/2b/6e/9f/2b6e9f46c2cc37569eabe5c40731579c.gif")
            message.channel.send({embed})
        }

        if(message.content.startsWith(prefix + "sword")){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setThumbnail(message.author.avatarURL)
            .setDescription(`${message.author} lance la capacité **Sword** sur ${message.mentions.users.first()} !\nDégâts : **75** pv`)
            .setColor(0xcc0099)
            .setImage("https://orangemushroom.files.wordpress.com/2012/07/blaze-up-effect.gif")
            message.channel.send({embed})
        }

        if(message.content.startsWith(prefix + "angel")){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setThumbnail(message.author.avatarURL)
            .setDescription(`${message.author} lance la capacité **Angel** pour s'envoler !`)
            .setColor(0xcc0099)
            .setImage("https://i.pinimg.com/originals/ce/0d/8d/ce0d8df5b15699d45caf2b32ef125380.gif")
            message.channel.send({embed})
        }

        if(message.content.startsWith(prefix + "dragon")){
            const embed = new Discord.RichEmbed()
            .setTitle(``)
            .setThumbnail(message.author.avatarURL)
            .setDescription(`${message.author} lance la capacité **dragon** sur ${message.mentions.users.first()} !\nDégâts : **75** pv`)
            .setColor(0xcc0099)
            .setImage("https://2img.net/h/i1156.photobucket.com/albums/p575/x3TheAran5921/Kaiser65121100effect.gif")
            message.channel.send({embed})
        }

if (message.content === "m!help 1" ){  

    const embed = new Discord.RichEmbed()
    .setTitle("Magie niveau 1")
    .setColor(0xcc0099)
    .setDescription("Voici toute les attaque qu'un mage niveau 1 peu faire")
    .setFooter("Si vous avez un probleme demander de l'aide a un modo ou au autre")
    .addField("Commande magique",
      "m!feu (-25PV) (utilisable 3 foix)\nm!tornade (-25PV)\nm!stick-magic (-15PV) (utilisable 3 foix)\nm!nature (-25PV)\nm!ice (-20PV)")
      .addField("Nombre de PV",
      "100PV pour un mage niveau 1")
  
    message.channel.send({embed});
}
if (message.content === "m!help" ){  

    const embed = new Discord.RichEmbed()
    .setTitle(``)
    .setColor(0xcc0099)
    .setDescription("m!help 1\nm!help 2\nm!help 3")
    message.channel.send({embed});
}
if (message.content === "m!help 2"){  

    const embed = new Discord.RichEmbed()
    .setTitle("Magie niveau 2")
    .setColor(0xcc0099)
    .setDescription("Voici toute les attaque qu'un mage niveau 2 peu faire")
    .setFooter("Si vous avez un probleme demander de l'aide a un modo ou au autre")
    .addField("Commande magique",
      "m!eclair (-50PV) (utilisable 3 fois par match)\nm!vent (-5) (cumulable avec une autre attaque pour ajouter 5 dégâts voir plus)\nm!ice-axe : normal : 50 de dégâts. et à sec par une attaque ma!feu: 10 de dégâts \nm!slach (-15PV)\nm!implosion (-50PV) (utilisable 1 fois par combats)\nm!protection : défend de 25 de dégâts (mais si l'attaque fait plus tu es obligé de te faire toucher) (utilisable 3 fois par combats)")
      .addField("Nombre de PV",
      "200PV pour un mage niveau 2")

    message.channel.send({embed});
}
if (message.content === "m!help 3"){  

    const embed = new Discord.RichEmbed()
    .setTitle("Magie niveau 3")
    .setColor(0xcc0099)
    .setDescription("Voici toute les attaque qu'un mage niveau 3 peu faire")
    .setFooter("derniere update : (jamais)")
    .addField("Commande magique",
      "m!soin : soigne de 10 pv (à utiliser 3 fois par match)\nm!onde : fait 30 de dégâts\nm!sword : fait 75 de dégâts (à utiliser 3 fois par match)\nm!angel : fait s'envoler dans les airs pour esquiver un attaque qui se passe au sol ou qui est pas redirigable !\nm!dragon : fait 75 de dégâts (utilisable 3 fois par match)")
      .addField("Nombre de PV",
      "300PV pour un mage niveau 3")

    message.channel.send({embed});
}
if (message.content === "<@441296290828124160>" ){ 

    const embed = new Discord.RichEmbed()
    .setTitle("liste des dev :D")
    .setAuthor("MagicBot")
    .setColor(0xcc0099)
    .setDescription("voila la liste de tout les dev :D")

          .addField("Lemres",
          "hebergeur de magie lier a lui\nil guide Sakamoto-san pour avoir des commande en plus et le paye de maniere tres special\nniveau de fatigue lier au bot : 50%")          
          .addField("Sakamoto-san",
          "créateur du MagicBot il a fais plus de 95% des ligne de code\nacompagner de Lemres il font de leur mieux pour avoir le meilleur avec le peu qui savent\nil est payer en croquette avec un suplement d'ont il ne peu pas oublier\nniveau de fatigue lier au bot : 50%")
          .addField("chose a ajouter ",
          "pour le moment il ne manque rien :/")
  
    message.channel.send({embed});
}

if (message.content.startsWith("m!celeste-sword")){
    if("323807479651631104".includes(message.author.id)){
        const embed = new Discord.RichEmbed()
        .setTitle(``)
        .setThumbnail(message.author.avatarURL)
        .setDescription(`${message.author} lance la capacité **Celeste Sword** sur ${message.mentions.users.first()} !\nDégâts : **300** pv`)
        .setColor(0xcc0099)
        .setImage("https://i.gifer.com/4v9H.gif")
        message.channel.send({embed})
    
}else{
    return message.reply("Tu n'as pas le droit de faire cette commande")
}}

}
)
