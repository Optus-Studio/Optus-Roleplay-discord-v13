const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Ban Appeal Optus Roleplay")
        .setDescription("Hoe werken Ban Appeal in Optus Roleplay? \n Hier onder zie je een knop alls je daar op klick dan kan jij je Ban Appeal instuuren.")
        .setColor(process.env.COLLOR)
        .setThumbnail(process.env.LOGO)
//        .setImage(process.env.BANNER)
        .setTimestamp()
        .setFooter("Ban Appeal Optus Roleplay")
        
        const row = new discord.MessageActionRow().addComponents(

            new discord.MessageButton()
            .setLabel("Ban Appeal")
            .setStyle("LINK")
            .setEmoji("🆘")
            .setURL("https://optusrp.nl/banappeal")
    
        );

    return message.channel.send({ embeds: [botEmbed], components: [row] }).then(msg => {
        message.delete()
        setTimeout(() => msg.delete(), 20000);
    });

}

module.exports.help = {
    name: "banappeal",
    category: "add ons",
    discription: "Dit is een command die jou de server Ban Appeal info geeft."
}