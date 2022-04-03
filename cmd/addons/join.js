const discord = require("discord.js");
const fivem = require("discord-fivem-api");
const fs = require("fs");
const ip = JSON.parse(fs.readFileSync("./src/addons/fivem-ip.json", "utf-8"));
const server = new fivem.DiscordFivemApi(`${ip.server_ip}:${ip.server_port}`);
const playersOnline = server.getPlayersOnline()
const maxPlayers = server.getMaxPlayers()

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle(`Players (${playersOnline}/${maxPlayers})`)
        .setDescription(result.length > 0 ? result : 'No Players Online!')
        .setAuthor("Server is online")
        .setColor(process.env.COLLOR)
        .setThumbnail(process.env.LOGO)
        .setImage(process.env.BANNER)
        .setTimestamp()
        .setFooter("Join Optus Roleplay")
        .addFields(
            { name: "*Hint*", value: "*je kan ook de knop hier onder indruken!*" },
        )

    const row = new discord.MessageActionRow().addComponents(

        new discord.MessageButton()
            .setLabel("Join Gelijk")
            .setStyle("LINK")
            .setEmoji("🎮")
            .setURL("https://cfx.re/join/lxz7q4")

    );

    return message.channel.send({ embeds: [botEmbed], components: [row] }).catch((err) => {
        var errEmbed = new discord.MessageEmbed()
            .setColor("RED")
            .setAuthor("Server is offline")
            .setThumbnail(process.env.LOGO)
            .setImage(process.env.BANNER)
            .setTimestamp()
            .setFooter("Join Optus Roleplay")

    }).then(msg => {
        message.delete()
        setTimeout(() => msg.delete(), 20000);
    });

}

module.exports.help = {
    name: "join",
    category: "add ons",
    discription: "Dit is een command die jou de server ip info geeft."
}