const discord = require("discord.js");
//File server
const fs = require("fs");
//Taal van de bot
const melding = JSON.parse(fs.readFileSync(`./src/addons/melding.json`, "utf-8"));

module.exports.run = async (client, message, args) => {

    if (!message.member.roles.cache.has(`${process.env.ADMINROLL}`)) return message.reply(`${language.no_admin}`).then(msg => {
        message.delete()
        setTimeout(() => msg.delete(), 10000);
    });

    const msg_melding = args.splice(0,args.length).join(" ");

    if(!msg_melding) return message.reply(`**${melding.no_msg}**`).then(msg => {
        message.delete()
        setTimeout(() => msg.delete(), 10000);
    });

    const meldingChannel = message.member.guild.channels.cache.get(melding.channel);

    if(!meldingChannel) return message.reply(`${melding.no_channel}`).then(msg => {
        message.delete()
        setTimeout(() => msg.delete(), 10000);
    });

    const Embed = new discord.MessageEmbed()
    .setTitle(`${melding.title} ${message.member.displayName}`)
    .setFooter(message.member.displayName, message.author.displayAvatarURL)
    .setColor(process.env.COLLOR)
    .setThumbnail(process.env.LOGO)
    .setImage(process.env.BANNER)
    .setTimestamp()
    .addField(`${melding.msg}`, `${msg_melding}`);

    const sucsesEmbed = new discord.MessageEmbed()
    .setTitle(`${melding.title} ${message.member.displayName}`)
    .setFooter(message.member.displayName, message.author.displayAvatarURL)
    .setColor(process.env.COLLOR)
    .setThumbnail(process.env.LOGO)
    .setImage(process.env.BANNER)
    .setTimestamp()
    .setFooter(`${melding.footer}`)
    .addField(`${melding.melding_chat}`, `${meldingChannel}`)

    message.channel.send({ embeds: [sucsesEmbed] }).then(msg => {
        message.delete()
        setTimeout(() => msg.delete(), 10000);
    });

    return meldingChannel.send({ embeds: [Embed] });
    

}

module.exports.help = {
    name: "melding",
    category: "admin",
    discription: melding.cmd_melding_disc
}