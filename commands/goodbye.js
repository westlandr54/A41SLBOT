const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = client => {
    const goodbyeEmbed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setImage(member.user.displayAvatarURL({ format: "jpg" }))
        .setTitle("✨ It's a goodbye!")
        .setDescription(`**${member.displayName}** has left for adventure .`)
        .setTimestamp();
};
