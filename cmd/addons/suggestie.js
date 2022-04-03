const discord = require("discord.js");
//File server
const fs = require("fs");
//Taal van de bot
const suggestie = JSON.parse(fs.readFileSync(`./src/addons/suggestie.json`, "utf-8"));

module.exports.run = async (client, message, args) => {

    const msg_suggestie = args.splice(1,args.length).join(" ") || `**${suggestie.no_msg}**`;

    const suggestieChannel = message.member.guild.channels.cache.get(suggestie.channel);

    if(!suggestieChannel) return message.reply(`${suggestie.no_msg}`);

    message.delete();

    const Embed = new discord.MessageEmbed()
    .setTitle(`${suggestie.title} ${message.member.displayName}`)
    .setFooter(message.member.displayName, message.author.displayAvatarURL)
    .setColor(process.env.COLLOR)
    .setThumbnail(process.env.LOGO)
    .setImage(process.env.BANNER)
    .setTimestamp()
    .addField(`${suggestie.msg}`, `${msg_suggestie}`);

    const sucsesEmbed = new discord.MessageEmbed()
    .setTitle(`${suggestie.title} ${message.member.displayName}`)
    .setFooter(message.member.displayName, message.author.displayAvatarURL)
    .setColor(process.env.COLLOR)
    .setThumbnail(process.env.LOGO)
    .setImage(process.env.BANNER)
    .setTimestamp()
    .setFooter(`${suggestie.footer}`)
    .addField(`${suggestie.suggestie_chat}`, `<#${suggestieChannel}>`)

    message.channel.send({ embeds: [sucsesEmbed] }).then(msg => {
        message.delete()
        setTimeout(() => msg.delete(), 10000);
    });

    return suggestieChannel.send({ embeds: [Embed] });

}

module.exports.help = {
    name: "suggestie",
    category: "add ons",
    discription: suggestie.cmd_suggestie_disc
}