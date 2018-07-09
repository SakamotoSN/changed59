const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const client = new Discord.Client();


const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ histoires: [],  xp: []}).write()

var number_random = 0;
var prefix = ("sigbot!")
var party_launch = false;

bot.on('ready', function() {
    bot.user.setUsername("Sigbot")
    bot.user.setPresence({ game: { name: 'faire des crepes pour niko'}, status: 'online'})
    console.log("Connected")});

bot.login(process.env.TOKEN);



bot.on('message', message => {
    
if (message.content === ".teste"){
    message.channel.send(`Testing message.`, {
        files: [
          "./image/rrjd8p.png"
        ]
      })}

}
)

 
