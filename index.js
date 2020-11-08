 const Discord = require("discord.js");
const client = new Discord.Client();
const { MessageEmbed } = require("discord.js")

client.on('message', message => {
if(message.content === "d!help") {
let embed = new MessageEmbed()
.setTitle("**Doggy Help!**")
.setDescription("**Use d!commands for commands!**")
.setColor("#FF0000")
.setFooter('Made By ArchDev#8837')
message.channel.send(embed)
}
});
client.login('token');
