const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  if(!args[0]) return message.channel.send("oof");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`${args[0]} mensajes eliminados correctamente.`).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "clear"
}
