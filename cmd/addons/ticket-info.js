const discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Hoe maak je een Ticket aan?")
        .setDescription("Dat is heel simpel je gaat naar <#779053938019532870> \n Dan gebruik je het volgende command. \n `-ticket [reden van het ticket]` \n Dan woord er een chat aan gemaakt voor jou")
        .setColor(process.env.COLLOR)
        .setThumbnail(process.env.LOGO)
        .setTimestamp()
        .setFooter("Ticket info Optus Roleplay")

    return message.channel.send({ embeds: [botEmbed] }).then(msg => {
        message.delete()
    });
    
}

module.exports.help = {
    name: "ticket-info",
    category: "admin",
    discription: "Dist is het embed over hoe mensen een ticket aan kunnen maaken."
}