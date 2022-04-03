const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    if (!message.member.roles.cache.has(`${process.env.ADMINROLL}`)) return message.reply("You're Not an ADMIN so you can't do this.");

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Discord Regels Optus Roleplay")
        .setDescription("Optus Roleplay heeft ook een aantal regels in de discord. \n Gebruik `-regels` in #cmds voor de server regels!")
        .setColor(process.env.COLLOR)
        .setThumbnail(process.env.LOGO)
        .setImage(process.env.BANNER)
        .setTimestamp()
        .setFooter("Discord Regels Optus Roleplay")
        .addFields(
            { name: "**1.**", value: "Houd je aan de TOS van Discord" },
            { name: "**2.**", value: "Heb respect voor iedereen" },
            { name: "**3.**", value: "Niet onnodig TAGs gebruiken" },
            { name: "**4.**", value: "Geen slechte links delen"},
            { name: "**5.**", value: "Heb respect voor Staff"}
        )
        

    return message.channel.send({ embeds: [botEmbed] }).then(msg => {
        message.delete()
//        setTimeout(() => msg.delete(), 20000);
    });

}

module.exports.help = {
    name: "discord",
    category: "admin",
    discription: "Dit is een command die jou de Discord Regels info geeft."
}