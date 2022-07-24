const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.roles.cache.has(`${process.env.DEVID}`)) return message.reply("You're Not an DEV so you can't do this.").then(msg => {
        message.delete()
        setTimeout(() => msg.delete(), 10000);
    });

    const categoryID = process.env.BUGID;

    var reason = args.join(" ");
    if (!reason) return message.channel.send("You must give a reason for closeing the BUG!").then(msg => {
        message.delete()
        setTimeout(() => msg.delete(), 10000);
    });

    if (message.channel.parentId == categoryID) {

        message.channel.delete();

        var embedTicket = new discord.MessageEmbed()
            .setTitle("Bug closed!")
            .setColor(process.env.COLLOR)
            .setImage(process.env.BANNER)
            .setDescription("This Bug is closed!")
            .addFields(
                { name: "Bug Name:", value: message.channel.name, inline: false },
                { name: "Bug Clost By:", value: message.author.username, inline: false },
                { name: "Reason:", value: reason, inline: false }
            )
            .setTimestamp()
            .setFooter("Bug closed");

        var ticketLogging = message.member.guild.channels.cache.find(channel => channel.id === process.env.BUGLOGS);
        if (!ticketLogging) return message.reply("There is no ADMIN LOGS ID in .env yet \n Ask the dev or host to add this").then(msg => {
            message.delete()
            setTimeout(() => msg.delete(), 10000);
        });

        return ticketLogging.send({ embeds: [embedTicket] });

    } else {
        return message.channel.send("You can only do this in a Bug channel!").then(msg => {
            message.delete()
            setTimeout(() => msg.delete(), 10000);
        });
    }

}

module.exports.help = {
    name: "bugclose",
    category: "admin",
    discription: "This is a command to close a bug."
}
