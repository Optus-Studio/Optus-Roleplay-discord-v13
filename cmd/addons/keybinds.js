const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Keybinds Optus Roleplay")
        .setDescription("Hoe werken bepaalde dingen in Optus Roleplay? \n Hier onder zie je een knop alls je daar op klick krijg je alle main besturing van de server.")
        .setColor(process.env.COLLOR)
        .setThumbnail(process.env.LOGO)
//        .setImage(process.env.BANNER)
        .setTimestamp()
        .setFooter("Keybinds Optus Roleplay")
        
        const row = new discord.MessageActionRow().addComponents(

            new discord.MessageButton()
            .setLabel("Keybinds")
            .setStyle("LINK")
            .setEmoji("⌨️")
            .setURL("https://optusrp.nl/keybinds")
    
        );

    return message.channel.send({ embeds: [botEmbed], components: [row] }).then(msg => {
        message.delete()
        setTimeout(() => msg.delete(), 20000);
    });

}

module.exports.help = {
    name: "keybinds",
    category: "add ons",
    discription: "Dit is een command die jou de server keybinds info geeft."
}