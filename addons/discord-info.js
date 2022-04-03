const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    if (!message.member.roles.cache.has(`${process.env.ADMINROLL}`)) return message.reply("You're Not an ADMIN so you can't do this.");

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Discord Info Optus Roleplay")
        .setDescription("Optus Roleplay heeft ook een aantal commands in de discord. \n Gebruik `-help` in #cmds voor alle commands!")
        .setColor(process.env.COLLOR)
        .setThumbnail(process.env.LOGO)
        .setImage(process.env.BANNER)
        .setTimestamp()
        .setFooter("Discord Info Optus Roleplay")
        .addFields(
            { name: "`-wetbook`", value: "Hier mee krijg je het wetbook van Optus Roleplay." },
            { name: "`-regels`", value: "Hier mee krijg je alle regels die in Optus Roleplay gelden." },
            { name: "`-join`", value: "Hier meer krijg je een simpele manier om de stad te joine." },
            { name: "`-keybinds`", value: "Hier mee kom je snel bij onze keybinds."},
            { name: "`-solliciteren`", value: "Hier mee kom je snel bij de sollicitaties."},
            { name: "`-banappeal`", value: "Hier vind je hoe jij je BanAppeal kan stuuren."},
            { name: "`-ticket`", value: "Hier mee maak je een ticket aan."}
        )
        

    return message.channel.send({ embeds: [botEmbed] }).then(msg => {
        message.delete()
//        setTimeout(() => msg.delete(), 20000);
    });

}

module.exports.help = {
    name: "discord-info",
    category: "admin",
    discription: "Dit is een command die jou de Discord info geeft."
}