const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Wetbook Optus Roleplay")
        .setDescription("Je krijgt de wetbook alls je op de knop onder dit bericht klickt. \n **!! LET OP !! Het wetbook kan veranderen.**")
        .setColor(process.env.COLLOR)
        .setThumbnail(process.env.LOGO)
//        .setImage(process.env.BANNER)
        .setTimestamp()
        .setFooter("Wetbook Optus Roleplay")
        
        const row = new discord.MessageActionRow().addComponents(

            new discord.MessageButton()
            .setLabel("Wetbook")
            .setStyle("LINK")
            .setEmoji("📝")
            .setURL("https://optusrp.nl/wetbook")
    
        );

    return message.channel.send({ embeds: [botEmbed], components: [row] }).then(msg => {
        message.delete()
        setTimeout(() => msg.delete(), 20000);
    });

}

module.exports.help = {
    name: "wetbook",
    category: "add ons",
    discription: "Dit is een command die jou de server wetbook info geeft."
}