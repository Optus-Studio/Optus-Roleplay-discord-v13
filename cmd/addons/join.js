const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Join Optus Roleplay")
        .setDescription("Hoe Join Je **Optus Roleplay**")
        .setColor(process.env.COLLOR)
        .setThumbnail(process.env.LOGO)
        .setImage(process.env.BANNER)
        .setTimestamp()
        .setFooter("Join Optus Roleplay")
        .addFields(
            { name: "**Stap 1**", value: "Start **FiveM**" },
            { name: "**Stap 2**", value: "Druk Op **F8**" },
            { name: "**Stap 3**", value: "Type `connect play.optusrp.nl`" },
            { name: "*Hint*", value: "*je kan ook de knop hier onder indruken!*"},
            { name: "**Stap 4**", value: "Veel Suc6 In **Optus Roleplay**"}
        )
        
        const row = new discord.MessageActionRow().addComponents(

            new discord.MessageButton()
            .setLabel("Join Gelijk")
            .setStyle("LINK")
            .setEmoji("🎮")
            .setURL("https://cfx.re/join/lxz7q4")
    
        );

    return message.channel.send({ embeds: [botEmbed], components: [row] }).then(msg => {
        message.delete()
        setTimeout(() => msg.delete(), 20000);
    });

}

module.exports.help = {
    name: "join",
    category: "add ons",
    discription: "Dit is een command die jou de server ip info geeft."
}