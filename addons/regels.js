const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Regels Optus Roleplay")
        .setDescription("Optus Roleplay heeft ook een aantal regels. \n Dit is belangrijk om jou RP ervaring hoog te houden. \n De regels vindje door hier onder op de knop te klicken.")
        .setColor(process.env.COLLOR)
        .setThumbnail(process.env.LOGO)
//        .setImage(process.env.BANNER)
        .setTimestamp()
        .setFooter("Regels Optus Roleplay")
        
        const row = new discord.MessageActionRow().addComponents(

            new discord.MessageButton()
            .setLabel("Regels")
            .setStyle("LINK")
            .setEmoji("⚠️")
            .setURL("https://optusrp.nl/rules")
    
        );

    return message.channel.send({ embeds: [botEmbed], components: [row] }).then(msg => {
        message.delete()
        setTimeout(() => msg.delete(), 20000);
    });

}

module.exports.help = {
    name: "regels",
    category: "add ons",
    discription: "Dit is een command die jou de server Regels info geeft."
}