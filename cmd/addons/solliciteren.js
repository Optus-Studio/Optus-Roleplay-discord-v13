const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("solliciteren Optus Roleplay")
        .setDescription("Zoek jij een belanrijke baan? \n Zoek dan niet veder en klick hier onder op de knop.")
        .setColor(process.env.COLLOR)
        .setThumbnail(process.env.LOGO)
//        .setImage(process.env.BANNER)
        .setTimestamp()
        .setFooter("solliciteren Optus Roleplay")
        
        const row = new discord.MessageActionRow().addComponents(

            new discord.MessageButton()
            .setLabel("Solliciteren")
            .setStyle("LINK")
            .setEmoji("📝")
            .setURL("https://optusrp.nl/solliciteren")
    
        );

    return message.channel.send({ embeds: [botEmbed], components: [row] }).then(msg => {
        message.delete()
        setTimeout(() => msg.delete(), 20000);
    });

}

module.exports.help = {
    name: "solliciteren",
    category: "add ons",
    discription: "Dit is een command die jou de server solliciteren info geeft."
}